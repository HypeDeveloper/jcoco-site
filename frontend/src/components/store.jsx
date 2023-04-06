import '../styles/components/store.css'
export function StoreCard(props){
    return(
        <>
            <div className="StoreCard">
                <div className="StoreImg mar-b-1">
                  <img src="" alt="" />  
                </div>
                <div className="storeText">
                    <p className="subHeader ">
                        Product Name
                    </p>
                    <p className="text pad-b-2">
                    More info about the product a short one would be needed
                    </p>
                </div>
                <button className="full-bttn">
                    View Product
                </button>
            </div>
        </>
    )
}