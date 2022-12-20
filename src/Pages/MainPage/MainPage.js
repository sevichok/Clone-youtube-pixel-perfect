import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./main.css"
import FirstRow from "./components/FirstRow"
import SecondRow from "./components/SecondRow"
import ThirdRow from "./components/ThirdRow"

function MainPage() {
  return (
    <div className='App'>
      <Header />
      <div className='m-main'>
        <Sidebar />
        <div className='m-content'>
          <FirstRow />
          <SecondRow />
          <ThirdRow />
        </div>
      </div>
    </div>
  )
}

export default MainPage