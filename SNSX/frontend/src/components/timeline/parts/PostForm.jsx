import React, { useState } from 'react'
import "./PostForm.css";

const PostForm = () => {
    const [text,setText] = useState("");

    //useStateにしないのはすでにuseStateしたtext依存だから保持する必要がない
    const isDisabled = text.trim().length === 0 || text.length > 140;

    const handleSubmit = async(e) => {
        e.preventDefault();
        //TODO:ユーザーIDが必要
        console.log("PostをバックエンドのAPIを使って送信");
        setText("");
    }

  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <div className="post-input-area">
        <img src='/assets/person/kv_character.webp' 
                className='avatar'></img>
        
        <textarea className="post-textarea"
            placeholder="What's happening?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={140}
        >
        </textarea>
      </div>

      <div className="post-footer">
        <span className="char-count">{text.length}/140</span>
        <button className="post-button" type='submit' disabled = {isDisabled}>
            Post
        </button>
      </div>

    </form>
  )
}

export default PostForm
