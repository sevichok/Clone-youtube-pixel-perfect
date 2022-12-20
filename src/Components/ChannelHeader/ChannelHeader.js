import React from 'react'
import "./channelheader.css"

import YTLogo from "../../Images/Header/svg/header-yt1.svg"
import YTTitle from "../../Images/Header/svg/header-yt2.svg"
import SearchLogo from "../../Images/Header/svg/header-search.svg"
import HIconDots from "../../Images/Header/svg/header-dots.svg"
import HIconCamera from "../../Images/Header/svg/header-camera.svg"
import HIconBell from "../../Images/Header/svg/header-bell.svg"
import HUserpic from "../../Images/Header/header-userpic.png"

import { Link } from 'react-router-dom';

function ChannelHeader() {
  return (
    <div className='ch-header'>
      <section className='ch-header-logo-menu'>
        <section className='ch-header-menu'>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <Link to="./main">
          <section className='ch-header-logo'>
            <img src={YTLogo} alt='logo-yt' style={{ marginRight: "3.67px" }} className='ch-header-logo-logo'></img>
            <img src={YTTitle} alt='logo-yt' className='ch-header-logo-title'></img>
          </section>
        </Link>
      </section>
      <p className='ch-hiding-text'>Margaret Phelps</p>
      <section className='ch-header-search'>
        <input type="text" placeholder='Search'></input>
        <img className='ch-header-input-icon' src={SearchLogo} alt="search-icon"></img>
      </section>
      <section className='ch-header-sidebar'>
        <section className='ch-header-sidebar-icons'>
          <img src={HIconCamera} alt='icon-1'></img>
          <img src={HIconDots} alt='icon-2'></img>
          <img src={HIconBell} alt='icon-3'></img>
          <span className='ch-icon-notification'>
            <p>3</p>
          </span>
        </section>
        <section className='ch-header-sidebar-user'>
          <figure>
            <img src={HUserpic} alt="userpic"></img>
          </figure>
        </section>
      </section>
    </div>
  )
}

export default ChannelHeader