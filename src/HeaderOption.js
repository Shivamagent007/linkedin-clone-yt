import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && (
            <Avatar className='headerOption_icon' src ="something{user.photoUrl}" />
        )}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption