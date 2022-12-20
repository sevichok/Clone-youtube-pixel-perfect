import React from 'react'
import VideoHeader from '../../Components/VideoHeader/VideoHeader'
import HiddenSidebar from '../../Components/HiddenSidebar/HiddenSidebar'
import "./player.css"
import VideoContent from './components/VideoContent'
import VideoSidebar from './components/VideoSidebar'

function PlayerPage() {
  return (
    <div className='App'>
      <VideoHeader />
      <HiddenSidebar />
      <div className='v-main'>
        <VideoContent />
        <VideoSidebar />
      </div>
    </div>
  )
}

export default PlayerPage