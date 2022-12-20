import React from 'react'
import "./hiddensidebar.css"

import Icon1 from "../../Images/Sidebar/svg/sidebar-icon1.svg"
import Icon2 from "../../Images/Sidebar/svg/sidebar-icon2.svg"
import Icon3 from "../../Images/Sidebar/svg/sidebar-icon3.svg"
import Icon4 from "../../Images/Sidebar/svg/sidebar-icon4.svg"

function HiddenSidebar() {
  return (
    <div className='hidden-sidebar'>
      <section className='hidden-sidebar-menu'>
        <section className='hidden-sidebar-menu-list'>
          <figure className='hidden-sidebar-menu-item'>
            <img alt='icon1' src={Icon1}></img>
            <figcaption>Home</figcaption>
          </figure>
          <figure className='hidden-sidebar-menu-item'>
            <img alt='icon2' src={Icon2}></img>
            <figcaption>Trending</figcaption>
          </figure>
          <figure className='hidden-sidebar-menu-item'>
            <img alt='icon3' src={Icon3}></img>
            <figcaption>Subscriptions</figcaption>
          </figure>
          <figure className='hidden-sidebar-menu-item'>
            <img alt='icon4' src={Icon4}></img>
            <figcaption>Library</figcaption>
          </figure>
        </section>
      </section>
    </div>
  )
}

export default HiddenSidebar