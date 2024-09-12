import React from "react";

function CartItem({ id, name, price, image, quantity, discount}) {

  const hasDiscount = discount > 0;
  const discountedPrice = (price * ((100 - discount) / 100)).toFixed(2);

  return (
  <div className="cart-item"> 
    <span className="cart-text"><img src={image} alt={name} className="cart-image"/> </span>
    <span className="cart-text">{name} </span>
    <span className="cart-text">{hasDiscount ? `${discountedPrice}€` : `${price}€`} </span>
    <span className="cart-text">x{quantity}</span>
  </div>
  )
}

export default CartItem;
