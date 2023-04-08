import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Styles
import '../styles/components/nav.css'

export default function NavBar(){
    const dropNav = useRef  ()
    const [opened, setOpened] = useState(false)

    useEffect(()=>{
        dropNav.current.style.display = opened ? 'flex' : 'none'
    }, [opened])

    function handleBuger(){
        setOpened(!opened)
    }
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
                            <Link to={'/umuAsa'}>Umu Asa</Link>
                        </li>
                        <li className="navList">
                            <Link to={'https://paystack.shop/princess-jecoco'}>Shop</Link>
                        </li>
                        <li className="navList">
                            <Link to={'/socials'}>Socials</Link>
                        </li>
                        <li className="navList">
                            <a href="#workWith">Collabs</a>
                        </li>
                    </div>

                    <div className="hamBugerMenu" onClick={handleBuger}>

                    </div>
                </div>
            </nav>

            <div className="drop_List" ref={dropNav}>
                <Link to={'/'} onClick={handleBuger} className="subHeader">Home</Link>
                <Link to={'/umuAsa'} onClick={handleBuger} className="subHeader">Umu Asa</Link>
                <Link to={'https://paystack.shop/princess-jecoco'} onClick={handleBuger} className="subHeader">Shop</Link>
                <Link to={'/socials'} onClick={handleBuger} className="subHeader">Socials</Link>
                <Link to={'#workWith'} onClick={handleBuger} className="subHeader">Collabs</Link>
            </div>
        </>
    )
}