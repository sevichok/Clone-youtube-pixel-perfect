import React from 'react'
import "./sidebar.css"
import Subscriptions from "./Subscriptions/Subscriptions"
import Menu from "./Menu/Menu"
import SettingsIcon from "../../Images/Sidebar/svg/sidebar-settings.svg"

function Sidebar() {
    return (
      <div className='sidebar'>
        <Menu />
        <Subscriptions />
        <section className='sidebar-settings'>
          <section className='sidebar-settings-logo'>
            <img src={SettingsIcon} alt='set-icon'></img>
          </section>
          <section className='sidebar-settings-text'>Settings</section>
        </section>
      </div>
    )
  }
  
  export default Sidebar