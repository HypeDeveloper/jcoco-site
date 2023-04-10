import '../styles/pages/about.css'
import hero1img from '../assets/images/75B6791F-BA0E-4C81-89CF-4BFE5CF6F17C.jpg'
import hero2img from '../assets/images/alaye230.jpg' 
import hero4img from '../assets/images/alaye 5.jpg' 
import hero5img from '../assets/images/IMG_3362.jpg' 
import hero6img from '../assets/images/alaye 5.jpg' 
import hero3img from '../assets/images/EEE32334-A1C0-4193-9105-B78C90A07408 2.jpg'
import Socials from './socials'
export default function AboutMe() {
    return (
        <>
            <section id="umu-about">
                
                <div className="umu-wrap">

                    <div className="text-box">
                        <h1 className="text_header about_text text-width-300">
                            The
                            Energy
                            Queen
                        </h1>
                    </div>
                </div>

                <div className="Album">
                    <div className="Abl_warp">
                        <CardsImg img={hero1img} text=''/>
                        <CardsImg img={hero2img} text=''/>
                        <CardsImg img={hero3img} text=''/>
                        <CardsImg img={hero4img} text=''/>
                        <CardsImg img={hero5img} text=''/>
                        <CardsImg img={hero6img} text=''/>
                    </div>
                </div>
            </section>

            <Socials/>
        </>
    )
}

function CardsImg(props){
    return(
        <>
        <div className="Alb_img">
                            <div className="wrapAbl_img">
                                <img src={props.img} alt="" />
                            </div>
                            <p className="text_Normal">
                                {props.text}
                            </p>
                        </div>
        </>
    )
}