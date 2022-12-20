import React from 'react'
import { Content2 } from '../text-content/Text'
import "./secondrow.css"
import { Link } from 'react-router-dom';
import LArrow from "../images/LeftArrow.svg"
import RArrow from "../images/RightArrow.svg"

function SecondRow() {
  const { title, content_list } = Content2
  const ContentList = content_list.map((item, index) => <Link to="/player">
    <figure className='m-content-row-content-item' key={index}>
      <img src={item.cover} alt='ch' className='m-cphoto'></img>
      <figcaption className='m-content-timing'>{item.timing}</figcaption>
      <figcaption className='m-content-figcaption'>{item.video_title}</figcaption>
      <figcaption className='m-content-figcaption-stats'>
        <p>{item.video_comments.first}&nbsp;&nbsp;·&nbsp;&nbsp;{item.video_comments.second}</p>
        <p>{item.video_comments.third}</p>
      </figcaption>
    </figure>
  </Link>)

  return (
    <section className='m-content-second-row'>
      <section className='m-content-row-header'>
        <figure className='m-content-row-desc'>
          <figcaption>{title}</figcaption>
        </figure>
        <section className='m-content-header-btns'>
          <figure className='m-arrow'>
            <img src={LArrow} alt='arr1' className='arr1'></img>
          </figure>
          <figure className='m-arrow'>
            <img src={RArrow} alt='arr2' className='arr2'></img>
          </figure>
        </section>
      </section>
      <section className='m-content-row-content'>
        {ContentList}
      </section>
    </section>
  )
}

export default SecondRow