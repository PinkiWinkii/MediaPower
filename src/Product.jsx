import React from "react";

function Product({ name, description, price, stock, image, discount, discountImage, id, addToCartFunction }) {
  const isLowStock = stock < 3;
  const hasDiscount = discount > 0;
  const discountedPrice = (price * ((100 - discount) / 100)).toFixed(2);

  return (
    <div className="product-card"> 
      {isLowStock && hasDiscount && <img src={discountImage} alt={name} className="product-discount-image"/>}
      <img src={image} alt={name} className="product-image"/> 
      <h2>{name}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Price: </strong> {hasDiscount ? 
      (<><span style={{ textDecoration: "line-through", fontSize: "13px", marginLeft: "6px" }}>{price}€</span><span style={{marginLeft: "4px", fontSize: "22px", fontWeight:"bold"}}>{discountedPrice}€</span></>) : 
      (<span>{price.toFixed(2)}€</span>)}</p> 
      <p className={isLowStock ? "product-low-stock" : "product-high-stock"}><strong>Stock:</strong> {stock} available</p>
      <button onClick={addToCartFunction} className="buy-button">Añadir al carrito</button>    
    </div>
  );
}

export default Product;
