import React from 'react'
import {Home,Search,Notifications,Mail,List,Bookmark,Group,Person,MoreHoriz} from "@mui/icons-material";
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <h1 className='sidebarLogo'>XXXX</h1>
            <ul className="sidebarList">
                <li className='sidebarListItem'>
                    <Home className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Home</span>
                </li>
                <li className='sidebarListItem'>
                    <Search className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Explore</span>
                </li>
                <li className='sidebarListItem'>
                    <Notifications className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Notifications</span>
                </li>
                <li className='sidebarListItem'>
                    <Mail className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Messages</span>
                </li>
                <li className='sidebarListItem'>
                    <List className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Lists</span>
                </li>
                <li className='sidebarListItem'>
                    <Bookmark className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Bookmarks</span>
                </li>
                <li className='sidebarListItem'>
                    <Group className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Communities</span>
                </li>
                <li className='sidebarListItem'>
                    <Person className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Profile</span>
                </li>
                <li className='sidebarListItem'>
                    <MoreHoriz className='sidebarIcon'/>
                    <span className='sidebarListItemText'>More</span>
                </li>
            </ul>

            <button className='sidebarPost'>Post</button>

            <div className="sidebarProfile">
                <img src='/assets/person/kv_character.webp' 
                className='sidebarAvatar'></img>
                <div className="sidebarProfileInfo">
                    <p className="sidebarName">みちした＠OCA</p>
                    <p className="sidebarHandle">@tendopac</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
