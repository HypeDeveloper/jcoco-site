import '../styles/pages/about.css'
import hero1img from '../assets/images/75B6791F-BA0E-4C81-89CF-4BFE5CF6F17C.jpg'
import hero2img from '../assets/images/alaye230.jpg'
import hero3img from '../assets/images/EEE32334-A1C0-4193-9105-B78C90A07408 2.jpg'
export default function AboutMe() {
    return (
        <>
            <section id="umu-about">
                <div className="mobileImg">
                <img src={hero1img} alt="" />

                </div>
                <div className="aboutImg1">
                    <img src={hero1img} alt="" />
                </div>
                <div className="aboutImg2">
                    <img src={hero2img} alt="" />

                </div>
                <div className="umu-wrap">

                    <div className="text-box">
                        <h1 className="headerMain about_text text-width-300">
                            The
                            Energy
                            Queen
                        </h1>
                        <p className="text">
                            I’m a Lawyer with a Masters degree in Oil & Gas law. I am a Hotelier & I’m the Managing director of Sefcon group of hotels, a Brand Ambassador , an Influencer  and a YouTuber.
                        </p>
                    </div>
                    {/* <div className="img2-about"></div> */}
                </div>
            </section>

            <section id="umu-SlideShow">
                <div className="wrap-umu">
                    <div className="slideInfo">
                        <h1 className="headerMain .pad-b-2 text-width-300">
                            What
                            Popping’
                        </h1>
                        <br />
                        <p className="text">
                            happily married to the most supportive man and we have 2 beautiful energetic kids together who mean the whole world to me . One is an actual celebrity lol
                        </p>
                    </div>
                </div>
            </section>


            <section id="frameHall-about">
                <div className="info-wrap-hall">
                    <div className="info-wrap">
                        <h1 className="headerMain text-width-500">
                            My Hall <br />
                            of Fame
                        </h1> <br />
                        <p className='text text-width-500'>
                            {/* info */}
                        </p>
                    </div>
                    <div className="info-vid">
                        <div className="videoMashup">
                            <iframe src="https://www.youtube.com/embed/u7amIzuw_YU" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section id="workWith">
                <div className="wrap-work">
                    <div className="info-workWith text-width-500">
                        <h1 className="headerMain">
                            Open to <br />
                            work with <br />
                            you
                        </h1>
                        <br />
                        
                        <br />
                        <p className="text">
                            {/* happily married to the most supportive man and we have 2 beautiful energetic kids together who mean the whole world to me . One is an actual celebrity lol */}
                        </p>
                    </div>
                    <div className="workimg-info">
                        <img src={hero3img} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}