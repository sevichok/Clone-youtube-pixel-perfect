import React from 'react'
import "./videocontent.css"

import HiddenIcon from "../images/svg/rightArrow.svg"
import PauseSVG from "../images/svg/Pause.svg"
import NextSVG from "../images/svg/Next.svg"
import VolumeSVG from "../images/svg/Volume.svg"
import FullScreenSVG from "../images/svg/FullScreen.svg"
import SubtitlesSVG from "../images/svg/Subtitles.svg"
import SettingsSVG from "../images/svg/Settings.svg"
import SizeSVG from "../images/svg/Size.svg"
import LikeSVG from "../images/svg/like.svg"
import DislikeSVG from "../images/svg/dislike.svg"
import ShareSVG from "../images/svg/arr.svg"
import { ContentStore } from "../components/TextContent"
import { Link } from 'react-router-dom'

function VideoContent() {
    const { main_title, main_date, main_disc, cover, button_title } = ContentStore

    return (
        <div className='v-content'>
            <section className='v-content-video'>
                <figure className='v-content-video_figure'>
                    <section className='v-cover-image'>
                        <section className='v-cover-placeholder'>
                            <div className='v-progress-timing'>
                                <p className='v-progress-time'>1:34</p>
                                <p className='v-progress-time'>19:00</p>
                            </div>
                            <div className='v-progress-full'>
                                <div className='v-progress-part'></div>
                            </div>
                            <div className='v-progress-icons'>
                                <div className='v-progress-icons-left'>
                                    <figure><img src={PauseSVG} alt='' className="v-icon-pause"></img></figure>
                                    <figure><img src={NextSVG} alt='' className="v-icon-next"></img></figure>
                                    <figure><img src={VolumeSVG} alt='' className="v-icon-vol" ></img></figure>
                                    <p className='v-hidden-progress-time'>1:34</p>
                                    <div className='v-progress-full-volume'>
                                        <div className='v-progress-part-volume'></div>
                                    </div>
                                    <p className='v-hidden-progress-time'>-10:00</p>
                                </div>
                                <div className='v-progress-icons-right'>
                                    <img src={SubtitlesSVG} alt='' style={{ paddingRight: "27px" }}></img>
                                    <img src={SettingsSVG} alt='' style={{ paddingRight: "25px" }}></img>
                                    <img src={SizeSVG} alt='' style={{ paddingRight: "23px" }}></img>
                                    <img src={FullScreenSVG} alt=''></img>
                                </div>
                            </div>
                        </section>
                    </section>
                    <figcaption>
                        <h3>Dude You Re Getting A Telescope</h3>
                        <img className='v-hidden-icon' alt='' src={HiddenIcon}></img>
                    </figcaption>
                    <figcaption className='v-clicking-content'>
                        <p>123k views</p>
                        <section className='v-clicking-content-area'>
                            <figure className='v-clicking-area'>
                                <img src={LikeSVG} alt=''></img>
                                <figcaption className='v-clicking-area-btn'>123k</figcaption>
                            </figure>
                            <figure className='v-clicking-area'>
                                <img src={DislikeSVG} alt=''></img>
                                <figcaption className='v-clicking-area-btn'>435k</figcaption>
                            </figure>
                            <figure className='v-clicking-area'>
                                <img src={ShareSVG} alt=''></img>
                                <figcaption className='v-clicking-area-btn'>Share</figcaption>
                            </figure>
                            <figure className='v-clicking-dots'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </figure>
                        </section>
                    </figcaption>
                </figure>
            </section>
            <section className='v-content-channel'>
                <Link to="/channel">
                    <figure className='v-content-channel-cover'>
                        <img src={cover} alt='ch2'></img>
                        <figcaption>
                            <h3>{main_title}</h3>
                            <p>{main_date}</p>
                            <p>{main_disc}</p>
                            <h4>Show more</h4>
                        </figcaption>
                    </figure>
                </Link>
                <section className='v-content-sub-button'>
                    <button className='v-sub-button'>{button_title}</button>
                </section>
            </section>
        </div>
    )
}
export default VideoContent