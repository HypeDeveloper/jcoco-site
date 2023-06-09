import { StoreCard } from '../components/store'
import '../styles/pages/home.css'
import { Link } from "react-router-dom";


import heroImg from '../assets/images/6159DFF7-3339-4F39-A55F-5DC1D7F73227.jpg'
import shopImg from '../assets/images/1AA4F7F2-C88C-41FA-91C3-F3A977516F8D.jpg'
import youImg from  '../assets/images/B87EFC13-E8B4-4CF5-A0EB-90ED5A137F43.jpg'
import store1 from '../assets/images/IMG-20230327-WA0027.jpg'
import store2 from '../assets/images/IMG-20230327-WA0029.jpg'
import store3 from '../assets/images/IMG-20230327-WA0032.jpg'

import c1 from '../assets/images/real.jpeg'
import c2 from '../assets/images/rvc.jpg'
import c3 from '../assets/images/sefcon.jpeg'


import round from '../assets/images/Asset 1.svg'
import Socials from './socials';
import { Footer } from '../components/loading';
import { useEffect, useState } from 'react';

const win = window;
const body  = document.getElementsByTagName('body')[0]



export default function Home() {
    const [scroll, setScroll] = useState(true)
    useEffect(()=>{
        body.style.height = '100vh'
        body.style.overflow = 'hidden'
        
        // Enable scrolling after 5 seconds
        setTimeout(() => {
            body.style.height = 'fit-content'
            body.style.overflowY = 'scroll'
        }, 5000);
    }, [])
    return (
        <>

            <section className="hero">
                {/* <div className="moveBox_circle">
                    <img src={round} alt="" />
                </div> */}
                {/* <div className="_work">
                    <div className="work _w1">
                        <img src={c1} alt="" />
                    </div>
                    <div className="work">
                    <img src={c2} alt="" />

                    </div>
                    <div className="work">
                    <img src={c3} alt="" />

                    </div>
                    
                </div> */}
                <div className="infoHero">
                    <div className="mask_TextInfo">
                        <p className="text_Hero text_Hero_trans">
                            Princess
                        </p>
                    </div>
                    <div className="mask_TextInfo">
                        <p className="text_HeroSub text_Hero_trans">
                            Jecoco
                        </p>
                    </div>
                </div>
            </section>

            <section className="aboutSection">
                <div className="back_bg"></div>

                <div className="aboutImg">
                    <div className="img_about_wrap">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
                <div className="textSection_about">
                    <p className="text_Normal">
                        I’m a Lawyer with a Masters degree in Oil & Gas law. I am a Hotelier & I’m the Managing director of Sefcon group of hotels, a Brand Ambassador , an Influencer  and a YouTuber.
                       
                       <br /> 
                       <br /> 
                       Princess Jecoco Socials
                       <div className="socials_hero">
                    <div className="social_boxes">

                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></g></svg>
                    </div>
                    <div className="social_boxes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33.99" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67.115 67.115 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995h-.002Zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898ZM69.673 225.607a40.008 40.008 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.313 40.313 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.268 40.268 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9Z"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857V92.85h-.001Z"/><path fill="#00F2EA" d="M242.075 76.63V66.516a66.285 66.285 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163ZM176.53 11.57a67.788 67.788 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571h34.643ZM99.966 113.58v-10.769a88.787 88.787 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833Z"/></svg>
                    </div>
                    <div className="social_boxes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32.66" viewBox="0 0 256 209"><path fill="#55acee" d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"/></svg>
                    </div>
                    <div className="social_boxes">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28.13" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"/><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
                    </div>
                </div>
                    </p>
                    <Link to={'/umuAsa'}> <div className="moveBox_circle">
                        <img src={round} alt="" />
                    </div></Link>
                </div>
            </section>

            <section className="storeSection">
                <div className="store_img">
                    <img src={shopImg} alt="" />
                </div>

                <div className="info_Store">
                    
                    <p className="text_Header">
                        Getting
                        My Exclusive Merch
                    </p>
                    <button>
                        View Store
                    </button>
                </div>

                <div className="storeCards_Slide">
                <div className="card_wrap">
                        <Link to={'https://paystack.shop/princess-jecoco'}><StoreCard img={store1} header='Ogini T-shirt' dis='3000'/></Link>
                        <Link to={'https://paystack.shop/princess-jecoco'}><StoreCard img={store2} header='Igbo Amaka T-shirt' dis='3000'/></Link>
                        <Link to={'https://paystack.shop/princess-jecoco'}><StoreCard img={store3} header='Period Caps Lock' dis='3000'/></Link>
                    </div>
                </div>
            </section>

            <section className="youtubeSection">
                <div className="youtube_img">
                    <img src={youImg} alt="" />
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
                    <div className="you_wrap">
                        <iframe src="https://www.youtube.com/embed/u7amIzuw_YU" frameBorder="0"></iframe>
                    </div>
                </div>
            </section>

            <Socials/>

        </>
    )
}