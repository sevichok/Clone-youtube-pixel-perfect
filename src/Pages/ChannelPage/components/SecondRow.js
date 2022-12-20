import React from 'react'
import "./secondrow.css"

import Search from "../images/search.svg"
import Cover from "../images/cover-blue.png"
import Photo1 from "../images/photo8.png"
import Photo2 from "../images/photo9.png"
import Photo3 from "../images/photo10.png"
import HiddenIcon from "../images/RightArrow.svg"

function SecondRow() {
  return (
    <div className='channel-content-second-row'>
      <div className='channel-second-row-left'>
        <section className='channel-left-header-list'>
          <section className='channel-header-list-item'>Home</section>
          <section className='channel-header-list-item'>Videos</section>
          <section className='channel-header-list-item'>Playlists</section>
          <section className='channel-header-list-item'>Channels</section>
          <section className='channel-header-list-item'>Discussion</section>
          <section className='channel-header-list-item'>About</section>
          <section className='channel-header-list-item'>
            <img src={Search} alt=''></img>
            <img src={HiddenIcon} alt='' className='channel-hidden-icon'></img>
          </section>
        </section>
        <section className='channel-left-content'>
          <figure className='channel-left-content-figure'>
            <figure>
              <img src={Cover} alt=''></img>
              <figcaption className='channel-content-center-timing'>7:36</figcaption>
            </figure>
            <figcaption>
              <h3>Choosing The Best Audio Player Software For Your Computer</h3>
              <p>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
              <p>11k views&nbsp;&nbsp;·&nbsp;&nbsp;6 months ago</p>
            </figcaption>
          </figure>
        </section>
      </div>
      <div className='channel-second-row-right'>
        <p>Recommended channel</p>
        <section className='channel-right-row-list'>
          <figure className='channel-right-row-item'>
            <img alt='photo1' src={Photo1}></img>
            <figcaption>Flora Benson</figcaption>
          </figure>
          <figure className='channel-right-row-item'>
            <img alt='photo2' src={Photo2}></img>
            <figcaption>Violet Cobb</figcaption>
          </figure>
          <figure className='channel-right-row-item'>
            <img alt='photo3' src={Photo3}></img>
            <figcaption>Phillip Mullins</figcaption>
          </figure>
        </section>
      </div>
    </div>
  )
}

export default SecondRow