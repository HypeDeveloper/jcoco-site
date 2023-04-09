import '../styles/pages/socials.css'
import { Link } from "react-router-dom";
import { Footer } from '../components/loading';
import round from '../assets/images/Asset 1.svg'

export default function Socials(){
    return(
        <>
            <section className="socials">
                
                <div className="infoHeader">
                    <h1 className="headerMain">
                        Open To 
                        Work With You
                    </h1>
                    <p className="text_Normal">
                        Your can reach Jecoco on the following Platforms
                    </p>
                    <div className="socials_hero">
                    <div className="social_boxes"></div>
                    <div className="social_boxes"></div>
                    <div className="social_boxes"></div>
                    <div className="social_boxes"></div>
                </div>
                </div>
            </section>
            <Footer/>
        </>
    )
} 

