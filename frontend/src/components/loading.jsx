import { useEffect, useRef, useState } from "react"

import logo from '../assets/images/PJ Logo.png'
export function MainLoading(){
    const loadingMain = useRef()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 1600)

        if(!loading){
            loadingMain.current.style.display = 'none'
        }
    }, [loading])

    
    return(
        <>
            <div className="LoadingBG" ref={loadingMain}>
                <div className="vi">
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    )
}