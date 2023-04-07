import { useEffect, useRef, useState } from "react"

let LoadedMain = true

export function MainLoading(){
    const loadingMain = useRef()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 1000)

        if(!loading){
            loadingMain.current.style.display = 'none'
        }
    }, [loading])

    
    return(
        <>
            <div className="LoadingBG" ref={loadingMain}>
                <h1 className="headerMain ">
                    Loading Main 
                </h1>
            </div>
        </>
    )
}