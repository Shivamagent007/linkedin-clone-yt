import React from 'react'
import "./Header.css"
import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch } from 'react-redux'
import { logout, } from "./features/userSlice"
import { auth } from './firebase'



function Header() {
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
        <div className="header__left">
            <img src="http://www.w3.org/2000/svg" alt="" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>

        </div>

        <div className="header__right">
            {/* Frontend Pending */}
            <HeaderOption Icon = {HomeIcon} title = "Home"/>
            <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network"/>
            <HeaderOption Icon = {BusinessCenterIcon} title = "Jobs"/>
            <HeaderOption Icon = {ChatIcon} title = "Messaging"/>
            <HeaderOption Icon = {NotificationsIcon} title = "Notifications"/> 
            <HeaderOption avatar = "https://yt3.ggpht.com/7Rwe4LTuO4jd-VU44TC2YPGmCkLZUXZ5A6thgTq4hjkNg7YtgF9FoJNevpv9dN_-YBHzbdDJ7CQ=s88-c-k-c0x00ffffff-no-rj-mo"
            title = "me"
            OnClick = {logoutOfApp}
            /> 

        </div>
    </div>
  )
}

export default Header