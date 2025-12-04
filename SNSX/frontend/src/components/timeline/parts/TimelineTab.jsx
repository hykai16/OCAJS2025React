import React from 'react'
import "./TimelineTab.css";

const TimelineTab = ({activeTab,setActiveTab}) => {
  return (
    <div className='timeline-tab'>
        <button className={`tab ${ activeTab === "forYou" ? "active" : ""}`}
         onClick={() => setActiveTab("forYou")}>For you</button>
        <button className={`tab ${ activeTab === "following" ? "active" : ""}`}
         onClick={() => setActiveTab("following")}>Following</button>
    </div>
  )
}

export default TimelineTab
