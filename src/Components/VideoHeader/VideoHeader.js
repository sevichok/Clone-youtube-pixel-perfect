import React from 'react'
import "./videoheader.css"
import { Link } from 'react-router-dom';
import YTLogo from "../../Images/Header/svg/header-yt1.svg"
import YTTitle from "../../Images/Header/svg/header-yt2.svg"
import SearchLogo from "../../Images/Header/svg/header-search.svg"
import HIconDots from "../../Images/Header/svg/header-dots.svg"
import HIconCamera from "../../Images/Header/svg/header-camera.svg"
import HIconBell from "../../Images/Header/svg/header-bell.svg"
import HUserpic from "../../Images/Header/header-userpic.png"

function VideoHeader() {
  return (
    <div className='v-header'>
      <section className='v-header-logo-menu'>
        <section className='v-header-menu'>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <Link to="/main">
          <section className='v-header-logo'>
            <img src={YTLogo} alt='logo-yt' style={{ marginRight: "3.67px" }} className='v-header-logo-logo'></img>
            <img src={YTTitle} alt='logo-yt' className='v-header-logo-title'></img>
          </section>
        </Link>
      </section>
      <section className='v-header-search'>
        <input type="text" placeholder='Search'></input>
        <img className='v-header-input-icon' src={SearchLogo} alt="search-icon"></img>
      </section>
      <section className='v-header-sidebar'>
        <section className='v-header-sidebar-icons'>
          <img src={HIconCamera} alt='icon-1'></img>
          <img src={HIconDots} alt='icon-2'></img>
          <img src={HIconBell} alt='icon-3'></img>
          <span className='v-icon-notification'>
            <p>3</p>
          </span>
        </section>
        <section className='v-header-sidebar-user'>
          <figure>
            <img src={HUserpic} alt="userpic"></img>
          </figure>
        </section>
      </section>
    </div>
  )
}

export default VideoHeader