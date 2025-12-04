import React from 'react'
import "./Rightbar.css";
import { SearchOutlined } from '@mui/icons-material';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="searchBox">
        <SearchOutlined className='searchIcon'/>
        <input type="text" placeholder='Search' />
      </div>

      <div className="premiumBox">
        <h3>Subscribe to Premium</h3>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button className="premiumButton">Subscribe</button>
      </div>

    </div>
  )
}

export default Rightbar
