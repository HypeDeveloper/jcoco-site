import { StoreCard } from '../components/store'
import '../styles/pages/home.css'
import { Link } from "react-router-dom";


import heroImg from '../assets/images/6159DFF7-3339-4F39-A55F-5DC1D7F73227.jpg'
import shopImg from '../assets/images/1AA4F7F2-C88C-41FA-91C3-F3A977516F8D.jpg'

import store1 from '../assets/images/IMG-20230327-WA0027.jpg'
import store2 from '../assets/images/IMG-20230327-WA0029.jpg'
import store3 from '../assets/images/IMG-20230327-WA0032.jpg'
import round from '../assets/images/Asset 1.svg'
import Socials from './socials';
import { Footer } from '../components/loading';




export default function Home() {
    return (
        <>

            <section className="hero">
                {/* <div className="moveBox_circle">
                    <img src={round} alt="" />
                </div> */}
                <div className="socials_hero">
                    <div className="social_boxes"></div>
                    <div className="social_boxes"></div>
                    <div className="social_boxes"></div>
                    <div className="social_boxes"></div>
                </div>
                <div className="infoHero">
                    <div className="mask_TextInfo">
                        <p className="text_Hero text_Hero_trans">
                            Princess
                        </p>
                    </div>
                    <div className="mask_TextInfo">
                        <p className="text_HeroSub">
                            Jecoco
                        </p>
                    </div>
                </div>
            </section>

            <section className="aboutSection">
                <div className="back_bg"></div>

                <div className="aboutImg">
                    <div className="img_about_wrap">
                        {/* <img src={heroImg} alt="" /> */}
                    </div>
                </div>
                <div className="textSection_about">
                    <p className="text_Normal">
                        I’m a Lawyer with a Masters degree in Oil & Gas law. I am a Hotelier & I’m the Managing director of Sefcon group of hotels, a Brand Ambassador , an Influencer  and a YouTuber.
                    </p>
                    <div className="moveBox_circle">
                        <img src={round} alt="" />
                    </div>
                </div>
            </section>

            <section className="storeSection">
                <div className="store_img">
                    <img src={shopImg} alt="" />
                </div>

                <div className="info_Store">
                    <p className="text_Normal">
                        Join and show your support to my
                        channel and brand  by
                    </p>
                    <p className="text_Header">
                        Getting
                        My Merch
                    </p>
                    <button>
                        View Store
                    </button>
                </div>

                <div className="storeCards_Slide">
                    <div className="card_wrap">
                        <StoreCard header='Product' dis='3000'/>
                        <StoreCard header='Product' dis='3000'/>
                        <StoreCard header='Product' dis='3000'/>
                    </div>
                </div>
            </section>

            <section className="youtubeSection">
                <div className="youtube_img">
                    <img src={shopImg} alt="" />
                </div>
                <div className="youtube_info">
                    
                    <p className="text_Header">
                    Join My 
YouTube 
                    </p>
                    <p className="text_Normal">
                    Where i talk about social Lifestyle and also 
give family advise. Every video is sure to make your day.
                    </p>
                    <button>
                        Join My Channel
                    </button>
                </div>

                <div className="youtubeEbm">
                    <div className="you_wrap"></div>
                </div>
            </section>

            <Socials/>

        </>
    )
}