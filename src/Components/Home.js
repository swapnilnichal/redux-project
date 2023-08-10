import React from "react";

function Home(props){
console.warn("props",props);
    return (
      <div>
        <h1>Home Component </h1>
        <div className="cart-wrapper ">
            <div className="img-wrapper item">
                <img src="https://www.pngall.com/wp-content/uploads/13/iPhone-14-No-Background.png" />
            </div>
            <div className="text-wrapper item">
                <span>Iphone-14</span>
                <span>Price: $1000.00</span>
            </div>
            <div className="btn-wrapper item">
                <button onClick={()=>props.addToCartHandler({price:1000,name:"i phone 14"})}>
                    Add To Cart
                </button>
                <button className="remove-cart-btn" onClick={()=>props.removeFromCartHandler()}>
                    Remove from Cart
                </button>
            </div>
        </div>
      </div>
    )
}

export default Home;