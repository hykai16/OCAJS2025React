import React from 'react'
import "./PostCard.css";
import { AddComment, AddCommentOutlined, AlignVerticalBottomOutlined, Comment, CommentBank, LoopOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

const PostCard = ({post}) => {
  return (
    <div className='post-card'>
      <img src={post.profilePicture}
      className='post-avatar'></img>

      <div className="post-body">
        <div className="post-header">
          <span className="post-username">{post.username}</span>
          <span className="post-userid">@{post.userId}</span>
          {/* TODO:〇分前とかに変更できたら */}
          <span className="post-time">-{new Date(post.createdAt).toLocaleString()}</span>
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
            <li className="postActionListItem">
              <ThumbUpAltOutlined className='postActionIcon'/>{post.likes.length}
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
