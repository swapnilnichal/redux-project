import React from "react";

function Home(){
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
                <button>
                    Add To Cart
                </button>
            </div>
        </div>
        <div className="addToCart">
            <img src="https://static.vecteezy.com/system/resources/previews/000/442/286/non_2x/vector-add-to-cart-vector-icon.jpg"/>
        </div>
      </div>
    )
}

export default Home;