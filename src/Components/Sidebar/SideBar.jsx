import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'
const SideBar = ({sidebar}) => {
  
  return (
    <div style={{
        right: sidebar ? '-100%' :'0'
    }} className='sidebar' >
        <div className="menu">
        <ul>
                <li><NavLink  className={'menuItem'} to={'/menu/all'}>menu</NavLink></li>
                <li><NavLink className={'menuItem'} to={'/rewards'}>rewards</NavLink></li>
                <li><NavLink className={'menuItem'} to={'/gift '}>gift cards</NavLink></li>
            </ul>
            <hr className='xett' />
            <div className="header-btns">
            <NavLink to={'/signin'}>Sign in</NavLink>
            <NavLink to={'/join'}>Join now</NavLink>
        </div>
        <div className='navFind'>
        <NavLink to={'/findstore'} className="location">
        <i className="fa-solid fa-location-dot"></i>
        Find a store
        </NavLink>
        </div>
        </div>
    </div>
  )
}

export default SideBar