import React, { useEffect, useState } from 'react'
import "./PostCard.css";
import { AddComment, AddCommentOutlined, AlignVerticalBottomOutlined, Comment, CommentBank, LoopOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import axios from 'axios';
import {format} from "timeago.js"
import { Link } from "react-router-dom";


const PostCard = ({post}) => {

  //ついでにいいねも
  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [user,setUser] = useState([]);

  //テストアカウント
  let currentUserId = "68a9442f119a34407958d3c9"

  useEffect(() => {
  //async使うために関数にしないといけない
    const fetchUser = async () => {
        const response = await axios.get(`/api/users/${post.userId}`);
        console.log(response.data)
        setUser(response.data);
    };
    fetchUser();

    setIsLiked(post.likes.includes(currentUserId));

  },[post.likes, currentUserId])

  const handleLike = async () => {
    try {
      await axios.put(`/api/posts/${post._id}/like`, {
        userId: currentUserId,
      });

      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className='post-card'>
      <Link to={`/profile/${post.userId}`}>
        <img
          src={user.profilePicture || "/assets/person/nopicture.webp"}
          className="post-avatar"
          alt="avatar"
        />
      </Link>


      <div className="post-body">
        <div className="post-header">
          <span className="post-username">{user.username}</span>
          <span className="post-userid">@{user.userId}</span>
          {/* TODO:〇分前とかに変更できたら */}
          <span className="post-time">-{format(post.createdAt)}</span>
        </div>
        <p className="post-text">
          {post.desc}
        </p>

        {post.img &&(
          <div className="post-image">
            <img src={post.img} alt="media" />
          </div>
        )}


        <div className="post-actions">
          <ul className='postActionList'>
            <li className="postActionListItem">
              <AddCommentOutlined className='postActionIcon'/>0
            </li>
            <li className="postActionListItem">
              <LoopOutlined className='postActionIcon'/>0
            </li>
            {/* 変更 */}
            <li
              className="postActionListItem"
              onClick={handleLike}
              style={{ cursor: "pointer" }}
            >
              <ThumbUpAltOutlined
                className={`postActionIcon ${isLiked ? "liked" : ""}`}
              />
              {like}
            </li>

            <li className="postActionListItem">
              <AlignVerticalBottomOutlined className='postActionIcon'/>5
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostCard
