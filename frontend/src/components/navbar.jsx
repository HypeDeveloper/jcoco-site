import { Link } from "react-router-dom";

// Styles
import '../styles/components/nav.css'

export default function NavBar(){
    return(
        <>
            <nav>
                <div className="navwrap">
                    <div className="logoTitle">
                        <Link to={'/'}>
                            <h1 className="headerLogo">
                                Princess Jecoco
                            </h1>
                        </Link>
                    </div>
                    <div className="text navs">
                        <li className="navList">
                            <Link to={'/me/UmuAsa'}>Umu Asa</Link>
                        </li>
                        <li className="navList">
                            <Link to={'/shop'}>Shop</Link>
                        </li>
                        <li className="navList">
                            <Link to={'/socials'}>Socials</Link>
                        </li>
                        <li className="navList">
                            <a href="#workWith">Collabs</a>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}