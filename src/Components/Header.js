import React from "react";

function Header(props){
console.warn("Header",props.data);
    return (
      <div>
            <span className="cart-count">{props.data.length}</span>
            <div className="addToCart">
                <img src="https://static.vecteezy.com/system/resources/previews/000/442/286/non_2x/vector-add-to-cart-vector-icon.jpg"/>
            </div>
      </div>
    )
}

export default Header;