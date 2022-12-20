import React from 'react'
import "./menu.css"

import Icon1 from "../../../Images/Sidebar/svg/sidebar-icon1.svg"
import Icon2 from "../../../Images/Sidebar/svg/sidebar-icon2.svg"
import Icon3 from "../../../Images/Sidebar/svg/sidebar-icon3.svg"
import Icon4 from "../../../Images/Sidebar/svg/sidebar-icon4.svg"
import Icon5 from "../../../Images/Sidebar/svg/sidebar-icon5.svg"
import Icon6 from "../../../Images/Sidebar/svg/sidebar-icon6.svg"
import Icon7 from "../../../Images/Sidebar/svg/sidebar-icon7.svg"
import Icon8 from "../../../Images/Sidebar/svg/sidebar-icon8.svg"
import Icon9 from "../../../Images/Sidebar/svg/sidebar-icon9.svg"
import Icon10 from "../../../Images/Sidebar/svg/sidebar-icon10.svg"
import Icon11 from "../../../Images/Sidebar/svg/sidebar-icon11.svg"

function Menu() {

    return (
        <div className='sidebar-menu'>
            <section className='sidebar-menu-list'>
                <figure className='sidebar-menu-item'>
                        <img alt='icon1' src={Icon1}></img>
                        <figcaption>Home</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon2' src={Icon2}></img>
                    <figcaption>Trending</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon3' src={Icon3}></img>
                    <figcaption>Subscriptions</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon4' src={Icon4}></img>
                    <figcaption>Library</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon5' src={Icon5}></img>
                    <figcaption>History</figcaption>
                </figure>
                <figure className='sidebar-menu-item' >
                    <img alt='icon6' src={Icon6}></img>
                    <figcaption>Watch later</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon7' src={Icon7}></img>
                    <figcaption>Favourites</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon8' src={Icon8}></img>
                    <figcaption>Liked videos</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon9' src={Icon9}></img>
                    <figcaption>Music</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon10' src={Icon10}></img>
                    <figcaption>Games</figcaption>
                </figure>
                <figure className='sidebar-menu-item' >
                    <img alt='icon11' src={Icon11}></img>
                    <figcaption>Show more</figcaption>
                </figure>
            </section>
        </div>
    )
}

export default Menu