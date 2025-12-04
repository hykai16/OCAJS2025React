import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Timeline from '../../components/timeline/Timeline'
import "./Home.css";
import Profile from '../../components/profile/Profile';
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className='homeWrapper'>
          <Sidebar/>

          {/* ReactRouterDomの機能で、呼び出し元が内容を決める */}
          <Outlet />

          <Rightbar/>
    </div>
  )
}

export default Home
