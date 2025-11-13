import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Timeline from '../../components/timeline/Timeline'
import "./Home.css";

const Home = () => {
  return (
    <div className='homeWrapper'>
        <Sidebar/>
        <Timeline/>
        <Rightbar/>
    </div>
  )
}

export default Home
