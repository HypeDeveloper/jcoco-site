import { StoreCard } from "../components/store";
import '../styles/pages/shop.css'

export default function Shop(){
    return(
        <>
            <section id="shop-banner">
                <div className="overlay">
                    <div className="shop-info">
                        <h1 className="headerMain">
                            Shop With My Brand
                        </h1>
                        <p className="text">
                        happily married to the most supportive man and we have 2 beautiful energetic kids together who mean the whole world to me . One is an actual celebrity lol
                        </p>
                    </div>
                </div>
            </section>

            <section id="products-shop">
                <div className="shop-produs-wrap">
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                </div>
            </section>
        </>
    )
}