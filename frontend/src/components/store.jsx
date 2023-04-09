import { Link } from 'react-router-dom'
import '../styles/components/store.css'
export function StoreCard(props){
    return(
        <>
            <div className="StoreCard">
                <div className="StoreImg mar-b-1">
                  <img src={props.img} alt=""/>  
                </div>
                <div className="storeText">
                <div className="line"></div>
                    <p className="subHeader ">
                       {props.header || 'Product Name'}
                    </p>
                    <p className="text pad-b-2">
                        {props.dis || 'More info about the product a short one would be needed'}
                    </p>
                </div>
            </div>
        </>
    )
}