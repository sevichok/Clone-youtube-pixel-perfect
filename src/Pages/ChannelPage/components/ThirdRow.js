import React from 'react'
import "./thirdrow.css"
import { Content } from '../components/Text'

import LArrow from "../images/LeftArrow.svg"
import RArrow from "../images/RightArrow.svg"

function ThirdRow() { 
    const { title, title_comment, content_list } = Content
    const ContentList = content_list.map((item, index) => <figure className='ch-content-row-content-item' key={index}>
        <img src={item.cover} alt='ch' className='cphoto'></img>
        <figcaption className='ch-content-timing'>{item.timing}</figcaption>
        <figcaption className='ch-content-figcaption'>{item.video_title}</figcaption>
        <figcaption className='ch-content-figcaption-stats'>
            <p>{item.video_comments.first}&nbsp;&nbsp;·&nbsp;&nbsp;{item.video_comments.second}</p>
            <p>{title_comment}</p>
        </figcaption>
    </figure>)

    return (
        <section className='ch-content-third-row'>
            <section className='ch-content-row-header'>
                <figure className='ch-content-row-desc'>
                    <figcaption>{title}</figcaption>
                </figure>
                <section className='ch-content-header-btns'>
                    <figure className='ch-arrow'>
                        <img src={LArrow} alt='arr1' className='arr1'></img>
                    </figure>
                    <figure className='ch-arrow'>
                        <img src={RArrow} alt='arr2' className='arr2'></img>
                    </figure>
                </section>
            </section>
            <section className='ch-content-row-content'>
                {ContentList}
            </section>
        </section>
    )
}

export default ThirdRow