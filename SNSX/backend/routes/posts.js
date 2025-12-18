const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//投稿を作成
router.post("/",async(req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return res.status(500).json(err);
    }
})

//タイムライン…自分の投稿とフォロワーの投稿をずらっと取得
router.get("/timeline/:userId", async(req,res) => {
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id});
        //自分がフォローしているフレンドの投稿
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId:friendId });
            })
        )
        //合体して返す
        return res.status(200).json(userPosts.concat(...friendPosts));
    }catch(err){
        return res.status(500).json(err);
    }
})

// 自分（または指定ユーザー）の投稿をすべて取得
router.get("/profile/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId })
      .sort({ createdAt: -1 }); // 新しい順
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});


//編集
router.put("/:id",async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({
                $set: req.body,
            });
            return res.status(200).json("投稿の編集に成功");
        }else{
            return res.status(403).json("自分の投稿の時だけ更新可能")
        }
    }catch(err){
        return res.status(500).json(err);
    }
})

//削除
router.delete("/:id",async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            return res.status(200).json("投稿の削除に成功");
        }else{
            return res.status(403).json("自分の投稿の時だけ削除可能")
        }
    }catch(err){
        return res.status(500).json(err);
    }
})

//投稿を取得
router.get("/:id",async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    }catch(err){
        return res.status(500).json(err);
    }
})

//投稿にいいねを押す
router.put("/:id/like",async(req,res) => {
        try{
            const post = await Post.findById(req.params.id);
            //まだいいねしてなかったら
            if(!post.likes.includes(req.body.userId)){
                //いいねできる
                await post.updateOne({
                    $push:{
                        likes:req.body.userId,
                    }
                })
                return res.status(200).json("いいねに成功！");
            }else{
                //いいねを解除
                await post.updateOne({
                    $pull:{
                        likes:req.body.userId,
                    }
                })
                return res.status(200).json("いいねを解除！");
            }
        }catch(err){
            return res.status(500).json(err);
        }
});




module.exports = router;