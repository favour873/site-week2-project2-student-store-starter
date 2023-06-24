import React from 'react'
import { Link } from "react-router-dom";
import "./ProductCard.css"

const ProductCard = (props) => {
  // const productQuantity = props.quantity(props.productId)
  // console.log(productQuantity)

  return (
    <div className="product-card">

      <div className="media"> 
          <Link to={"/store/" + props.product.id} >
              <img src={props.product.image} alt= {props.product.name.toLowerCase()}></img> 
          </Link>  
      </div>  
      
      <div className="product-container"> 
          <h3 className="product-name"> {props.product.name} </h3>
          <p className="product-price"> ${props.product.price.toFixed(2)}  </p>
          {props.showDescription && <p className="product-description"> {props.product.description} </p>}
          {/* {productQuantity}  */}
      </div>
      
      <button className="add" onClick={() => props.handleAddItemToCart(props.productId)}> + </button>
      <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.productId)}> - </button>

    </div>
  )
}

export default ProductCard