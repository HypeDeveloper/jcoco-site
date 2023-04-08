import { StoreCard } from '../components/store'
import '../styles/pages/home.css'
import { Link } from "react-router-dom";

import heroImg from '../assets/images/6159DFF7-3339-4F39-A55F-5DC1D7F73227.jpg'
import shopImg from '../assets/images/1AA4F7F2-C88C-41FA-91C3-F3A977516F8D.jpg'

import store1 from '../assets/images/IMG-20230327-WA0027.jpg'
import store2 from '../assets/images/IMG-20230327-WA0029.jpg'
import store3 from '../assets/images/IMG-20230327-WA0032.jpg'

export default function Home(){
    return(
        <>
            <section id='Hero1'>
                <div className="imgHero">
                    <img src={heroImg} alt="" />
                </div>
                <div className="socials_home">
                    <div className="socialBoxes"></div>
                    <div className="socialBoxes"></div>
                    <div className="socialBoxes"></div>
                    <div className="socialBoxes"></div>
                    <div className="socialBoxes"></div>
                </div>
            </section>

            <section id='shop_hero'>
                <div className="shopMain_img">
                    <img src={shopImg} alt="" />

                </div>
                <div className="shopInfo">
                    <div className="shopTop_info">
                        <h1 className="headerMain text-width-300">
                            Get My Merch
                        </h1>
                        <p className="text text-width-500 pad-b-2">
                        happily married to the most supportive man and we have 2 beautiful energetic kids together who mean the whole world to me . One is an actual celebrity lol
                        </p>
                        <Link to='https://paystack.shop/princess-jecoco'><button>View Store</button></Link>
                    </div>
                    <div className="shopButtom_info">
                        <StoreCard img={store1} header='Ogini' dis=' ' to='https://paystack.shop/princess-jecoco?product=ogini-t-shirt-wzjvfe'/>
                        <StoreCard img={store2} header='Igbo Amaka ' dis=' ' to='https://paystack.shop/princess-jecoco'/>
                        <StoreCard img={store3} header='Period dot ... ' dis=' ' to='https://paystack.shop/princess-jecoco?product=period-dot-on-capslock-t-shirt-qqcjgi'/>
                    </div>
                </div>
            </section>


            <section id='youtube-hero'>
                <div className="youtube-info">
                    <h1 className="headerMain pad-b-2">
                        Join My Youtube
                    </h1>
                    <p className="text">
                        happily married to the most supportive man and we have 2 beautiful energetic kids together who mean the whole world to me . One is an actual celebrity lol
                    </p>
                    <div className="buttonHandle">
                    <Link to='https://www.youtube.com/@princessjecoco'><button>Join My Channel</button></Link>
                    </div>
                </div>
                <div className="youtubeSpace">
                    <iframe src="https://www.youtube.com/embed/qSJQQ8g-yME" frameborder="0"></iframe>
                </div>
            </section>

            <section id="feed-hero">
                <div className="feed-info">
                    <h1 className="headerMain pad-b-2">
                    Instagram <br />
                    Twitter Post
                    </h1>
                    <p className="text ">
                    happily married to the most supportive man and we have 2 beautiful energetic kids together who mean the whole world to me . One is an actual celebrity lol
                    </p>
                </div>
                <div className="feeds-acu">
                    <div className="feedbox-wrap">
                        <div className="feeds"></div>
                        <div className="feeds"></div>
                        <div className="feeds"></div>
                        <div className="feeds"></div>
                        <div className="feeds"></div>
                        <div className="feeds"></div>
                    </div>
                </div>
            </section>
        </>
    )
}