import React, { useEffect, useState }from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

const ProductDetail = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState(null)

    const fetchProduct = async () => {
        try {
          const res =  await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
          console.log(res);
          if (res?.data?.product) {
            setProduct(res.data.product)
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
        ? ( <ProductCard key={product.id} product={product} productId={product.id} showDescription={true}/>) 
        : (
        <h3> Loading... </h3>)}
        
    </div>

  )}

export default ProductDetail
