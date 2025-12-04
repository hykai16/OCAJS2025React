import React from 'react'
import "./Profile.css"
import { ArrowBackOutlined, LocationPin } from '@mui/icons-material'
import PostCard from '../timeline/parts/PostCard'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {userId} = useParams();


  const users = [
    {
        userId:"aaa111",
        username:"kai",
        profilePicture:"/assets/person/kv_character.webp",
        coverPicture:"/assets/cover/sakura.JPG",
        followers:[],
        followings:[],
        desc:"プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中",
        city:"Osaka"
    },
    {
        userId:"aaa222",
        username:"kai2",
        profilePicture:"/assets/person/kv_character.webp",
        coverPicture:"/assets/cover/sakura.JPG",
        followers:[],
        followings:[],
        desc:"プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中プログラミング勉強中",
        city:"Osaka"
    },
]

    //ダミーデータ
  const dummyPosts = [
    {
      id:"1",
      userId:"aaa111",
      username:"kai",
      profilePicture:'/assets/person/kv_character.webp',
      desc:"みんなが幸せでありますように",
      img:"",
      likes:[],
      createdAt:"2025-11-26T10:00:00Z"
    },
    {
      id:"2",
      userId:"aaa111",
      username:"kai",
      profilePicture:'/assets/person/kv_character.webp',
      desc:"じぶんをしんじて",
      img:"",
      likes:[],
      createdAt:"2025-11-26T11:00:00Z"
    },

  ]

  const user = users.find((u) => u.userId === userId);

  if(!user){
    return <div className='profile'>User not found</div>
  }
  
    return (
    <div className='profile'>
      <div className="profileHeader">
        <ArrowBackOutlined/>
        <div className="headerInfo">
            <h2>{user.username}</h2>
        </div>
      </div>

        <div className="profileCover">
            <img src={user.coverPicture} alt="cover" />
        </div>

        <div className="profileAvatarWrapper">
            <img src={user.profilePicture} alt="" className="profileAvatar" />
            <div className="profileEditBtns">
                <button className="editBtn">編集</button>
                <button className="followBtn">Follow</button>
            </div>
        </div>

        <div className="profileInfo">
            <h2>
                {user.username}
            </h2>
            <span className="userId">@{user.userId}</span>
            <p className="profileDesc">{user.desc}</p>

            <div className="profileMeta">
                <span><LocationPin/>{user.city}</span>
            </div>

            <div className="profileFollow">
                <span><strong>{user.followings.length}</strong> Followings</span>
                <span><strong>{user.followers.length}</strong> Followers</span>
            </div>
        </div>

        {/* 自分のポストを一覧で表示 */}
        <>
          {dummyPosts.map((post) => (
            <PostCard key={post.id} post={post}/>
          ))}
        </>


    </div>
  )
}

export default Profile
