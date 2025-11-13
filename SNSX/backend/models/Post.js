const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    //だれが
    //文字
    //画像
    //いいね fav
    //投稿日時

    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        max:140
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    },   
},
{timestamps:true}
)

module.exports = mongoose.model("Post",PostSchema);