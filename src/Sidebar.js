import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="chrome-untrusted://new-tab-page/custom_background_image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fproxy%2F117vV6FzD28GbH8Q6vDjlVMUpJFc0jvO52lfGZwLelOH22cN3qcmO_E0uwJQpev-DvBAp0WTViCHBwqeZO__Q0Ckq6Ga76AvVN3awL1ZZqE%3Dw3840-h2160-p-k-no-nd-mv"
             alt="" />
            <Avatar src={user.photoUrl} className="sidebar__avatar">
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,453</p>
            </div>
            <div className="sidebar__stat">
                <p>Views On post</p>
                <p className='sidebar__statNumber'>2,323</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareenginering")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar