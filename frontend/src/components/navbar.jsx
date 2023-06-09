import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Styles
import '../styles/components/nav.css'
import logo from '../assets/images/PJ Logo.png'


export default function NavBar() {
    const dropNav = useRef()
    const mainNav = useRef()
    const [opened, setOpened] = useState(false)
    const [scroll, setScroll] = useState(0)


    useEffect(() => {
        dropNav.current.style.display = opened ? 'flex' : 'none'  
              
    }, [opened])
    useEffect(()=>{
       
            console.log(scroll);
            // if(scroll > 0){
            //     mainNav.current.style.display = 'block'
            // }
            // else{
            //     mainNav.current.style.display = 'none'
            // }
    },[scroll])

    function handleBuger() {
        setOpened(!opened)
    }
    onscroll = (e)=>{
        setScroll(scrollY)    
    }

    
    return (
        <>
            <nav ref={mainNav}>
                <div className="navwrap">
                    <div className="logoTitle">
                        <div className="vilo">
                            <img src={logo} alt="" />
                        </div>

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
                            <Link to={'/socials'}>Collaboration</Link>
                        </li>
                    </div>

                    <div className="hamBugerMenu" onClick={handleBuger}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="M5 5L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L19 19;M5 5L19 5" /></path><path d="M12 12H12" opacity="0"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M12 12H12;M5 12H19" /><set attributeName="opacity" begin="0.2s" to="1" /></path><path d="M5 19L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L19 5;M5 19L19 19" /></path></g></svg>
                    </div>
                </div>
            </nav>

            <div className="drop_List" ref={dropNav}>
                <Link to={'/'} onClick={handleBuger} className="subHeader">Home</Link>
                <Link to={'/umuAsa'} onClick={handleBuger} className="subHeader">Umu Asa</Link>
                <Link to={'https://paystack.shop/princess-jecoco'} onClick={handleBuger} className="subHeader">Shop</Link>
                <Link to={'/socials'} onClick={handleBuger} className="subHeader">Collaboration</Link>
            </div>
        </>
    )
}