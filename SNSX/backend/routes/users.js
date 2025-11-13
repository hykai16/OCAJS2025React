const router = require("express").Router();
const User = require("../models/User");

//更新
router.put("/:id",async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                //スキーマのパラメーターを全て指定するよ
                $set:req.body,
            });
            res.status(200).json("ユーザー情報が更新されました");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("自分のアカウントの時だけ更新可能")
    }
})

//削除
router.delete("/:id",async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("ユーザー情報が削除されました");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("自分のアカウントの時だけ更新可能")
    }
})

//取得
router.get("/:id",async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        //見えちゃいけない情報を除外
        const {password,updateAt,...other } = user._doc;
        res.status(200).json(other);
    }catch(err){
        return res.status(500).json(err);
    }
})

//フォロー
router.put("/:id/follow",async(req,res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            //まだフォローしてなかったら
            if(!user.followers.includes(req.body.userId)){
                //ユーザーはフォローされる
                await user.updateOne({
                    $push:{
                        followers:req.body.userId,
                    }
                })
                //自分はフォローする
                await currentUser.updateOne({
                    $push:{
                        followings:req.params.id,
                    }
                })
                return res.status(200).json("フォローに成功！");
            }else{
                return res.status(403).json("すでにフォローしてます");
            }

        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(500).json("自分自身をフォローできません");
    }
})

//フォロー解除
router.put("/:id/unfollow",async(req,res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            //フォローしてたら解除できる
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $pull:{
                        followers:req.body.userId,
                    }
                })
                await currentUser.updateOne({
                    $pull:{
                        followings:req.params.id,
                    }
                })
                return res.status(200).json("アンフォローに成功！");
            }else{
                return res.status(403).json("もともとフォローしてません");
            }

        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(500).json("自分自身をアンフォローできません");
    }
})


module.exports = router;