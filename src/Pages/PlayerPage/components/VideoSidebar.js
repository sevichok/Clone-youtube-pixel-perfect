import React from 'react'
import "./videosidebar.css"
import { Content } from "../components/TextSidebar"

function VideoSidebar() {
  const { title, comment, author, list } = Content
  const ContentList = list.map((item, index) => <figure className='v-content-sidebar-item' key={index}>
    <img src={item.cover} alt='ch' className='v-cphoto'></img>
    <figcaption className='v-content-sidebar-timing'>{item.timing}</figcaption>
    <figcaption className='v-content-sidebar-figcaption'>{item.title}</figcaption>
    <figcaption className='v-content-sidebar-figcaption-stats'>
      <p>{item.discription}</p>
      <p>{author}</p>
    </figcaption>
  </figure>)

  return (
    <section className='v-content-sidebar-right'>
      <section className='v-content-sidebar-header'>
        <figure className='v-content-sidebar-desc'>
          <figcaption className='v-content-sidebar-desc-title'>
            <h3>{title}</h3>
          </figcaption>
          <figcaption className='v-content-sidebar-desc-rec'>
            <p>{comment}</p>
            <p className='v-blue_dot'></p>
          </figcaption>
        </figure>
      </section>
      <section className='v-content-sidebar-content'>
        {ContentList}
      </section>
    </section>
  )
}

export default VideoSidebar