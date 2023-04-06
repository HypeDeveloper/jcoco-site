import { StoreCard } from '../components/store'
import '../styles/pages/home.css'

export default function Home(){
    return(
        <>
            <section id='Hero1'>
                <div className="imgHero">

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

                </div>
                <div className="shopInfo">
                    <div className="shopTop_info">
                        <h1 className="headerMain text-width-300">
                            Get My Merch
                        </h1>
                        <p className="text text-width-500 pad-b-2">
                        happily married to the most supportive man and we have 2 beautiful energetic kids together who mean the whole world to me . One is an actual celebrity lol
                        </p>
                        <button>View Store</button>
                    </div>
                    <div className="shopButtom_info">
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
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
                    <button>Join My Channel</button>
                    </div>
                </div>
                <div className="youtubeSpace">

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