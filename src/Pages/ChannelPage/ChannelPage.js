import React from 'react'
import ChannelHeader from '../../Components/ChannelHeader'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./channel.css"
import FirstRow from "./components/FirstRow"
import SecondRow from "./components/SecondRow"
import ThirdRow from "./components/ThirdRow"

function ChannelPage() {
  return (
    <div className='App'>
      <ChannelHeader />
      <div className='ch-main'>
        <Sidebar />
        <div className='ch-content'>
          <FirstRow />
          <SecondRow />
          <ThirdRow />
        </div>
      </div>
    </div>
  )
}

export default ChannelPage