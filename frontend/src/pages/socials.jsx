import '../styles/pages/socials.css'
import { Link } from "react-router-dom";
export default function Socials(){
    return(
        <>
            <section className="socials">
                <div className="infoHeader">
                    <h1 className="headerMain">
                    Available   <br />
                    On
                    </h1>
                </div>
            </section>

            <section id='social-list'>
                <div className="wrap-socialInfo">
                    <p className="text text-width-300 al-text-right">
                        You can reach out to me on the following platforms
                    </p>
                    <div className="linepart"></div>
                    <div className="socialBox">
                        <h1 className="headerMain line">
                            <Link to=''>
                            Instagram
                            </Link>
                        </h1>
                        <h1 className="headerMain">
                            <Link to='https://www.youtube.com/@princessjecoco'>Youtube</Link>
                        </h1>
                        <h1 className="headerMain">
                            <Link to=''>TikTok</Link>
                        </h1>
                        <h1 className="headerMain">
                            <Link to=''>Twitter</Link>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
} 