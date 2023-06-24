import React, { useEffect, useState }from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import ProductView from '../ProductView/ProductView'

const ProductDetail = (props) => {
    const {productId} = useParams()
    const [product, setProduct] = useState(null)
    const productQuantity = props.quantity(productId)

    const fetchProduct = async () => {
        try {
          const res =  await axios.get(`http://localhost:3001/store/${productId}`)
          // console.log("this is the result", res.data);
          if (res?.data) {
            setProduct(res.data)
          } else {
            console.error("Something went wrong.")
          }
        } catch (err) {
          console.log(err)}}

    if (!product){
        fetchProduct()}
        
  return (
    <div>

        {product 
        ? ( <ProductView product={product} quantity={props.quantity} productId={productId} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>)
        // <ProductCard key={product.id} product={product} productId={product.id} showDescription={true} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>) 
        : (<h3> Loading... </h3>)}
        
    </div>

  )}

export default ProductDetail
