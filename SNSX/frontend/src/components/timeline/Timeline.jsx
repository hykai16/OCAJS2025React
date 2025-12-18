import React, { useEffect, useState } from 'react'
import "./Timeline.css";
import TimelineTab from './parts/TimelineTab';
import PostForm from './parts/PostForm';
import PostCard from './parts/PostCard';
import axios from "axios";

const Timeline = () => {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    //async使うために関数にしないといけない
    const fetchPosts = async () => {
        const response = await axios.get("/api/posts/timeline/691564560193f7fc67642f49");
        console.log(response.data)
        setPosts(response.data);
    };
    fetchPosts();

  },[])

  const [activeTab,setActiveTab] = useState("forYou");

  //ダミーデータ
  // const dummyPosts = [
  //   {
  //     id:"1",
  //     userId:"aaa111",
  //     username:"kai",
  //     profilePicture:'/assets/person/kv_character.webp',
  //     desc:"みんなが幸せでありますように",
  //     img:"",
  //     likes:[],
  //     createdAt:"2025-11-26T10:00:00Z"
  //   },
  //   {
  //     id:"2",
  //     userId:"bbb222",
  //     username:"kami",
  //     profilePicture:'/assets/person/kv_character.webp',
  //     desc:"じぶんをしんじて",
  //     img:"/assets/person/kv_character.webp",
  //     likes:[],
  //     createdAt:"2025-11-26T11:00:00Z"
  //   },

  // ]

  return (
    <div className='timeline'>
      <TimelineTab activeTab = {activeTab} setActiveTab = {setActiveTab}/>
      <PostForm/>
      {
        activeTab === "forYou" &&(
          <>
          {posts.map((post) => (
            <PostCard key={post._id} post={post}/>
          ))}
          </>
        )
      }

      {
        activeTab === "following" &&(
          <>
          <h1>following</h1>
          </>
        )
      }



    </div>
  )
}

export default Timeline
