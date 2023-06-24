import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductView = ({product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart}) => {
  return (
    <div className="product-view">
      <h1 className="product-id"> Product #{productId}</h1>
      <ProductCard key={productId} product={product} quantity={quantity} productId={productId} showDescription={true} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
    </div>
  )
}

export default ProductView