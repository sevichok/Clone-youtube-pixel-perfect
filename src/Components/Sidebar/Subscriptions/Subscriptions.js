import React from 'react'
import "./subscriptions.css"
import Photo1 from "../../../Images/Sidebar/photos/photo1.png"
import Photo2 from "../../../Images/Sidebar/photos/photo6.png"
import Photo3 from "../../../Images/Sidebar/photos/photo5.png"
import Photo4 from "../../../Images/Sidebar/photos/photo4.png"
import Photo5 from "../../../Images/Sidebar/photos/photo3.png"
import Photo6 from "../../../Images/Sidebar/photos/photo2.png"

import { Link } from 'react-router-dom';

function Subscriptions() {
    return (
        <div className='sidebar-subs'>
            <h3>Subscriptions</h3>
            <section className='sidebar-subs-list'>
                <Link to="/channel">
                    <figure className='subs-list-item'>
                        <img alt='photo1' src={Photo1}></img>
                        <figcaption>Gussie Singleton</figcaption>
                    </figure>
                </Link>
                <Link to="/channel">
                <figure className='subs-list-item'>
                    <img alt='photo2' src={Photo2}></img>
                    <figcaption>Nora Francis</figcaption>
                </figure>
                </Link>
                <Link to="/channel">
                <figure className='subs-list-item'>
                    <img alt='photo3' src={Photo3}></img>
                    <figcaption>Belle Briggs</figcaption>
                </figure>
                </Link>
                <Link to="/channel">
                <figure className='subs-list-item'>
                    <img alt='photo4' src={Photo4}></img>
                    <figcaption>Eunice Cortez</figcaption>
                </figure>
                </Link>
                <Link to="/channel">
                <figure className='subs-list-item'>
                    <img alt='photo5' src={Photo5}></img>
                    <figcaption>Emma Hanson</figcaption>
                </figure>
                </Link>
                <Link to="/channel">
                <figure className='subs-list-item' >
                    <img alt='photo6' src={Photo6}></img>
                    <figcaption>Leah Berry</figcaption>
                </figure>
                </Link>
            </section>
        </div>
    )
}

export default Subscriptions