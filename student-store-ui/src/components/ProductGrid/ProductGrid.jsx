import React from 'react'
import {useState} from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

const ProductGrid = (props) => {

  const [searchValue, setSearchValue] = useState("")
  const [category, setCategory] = useState("all categories")

  const handleSearch = (event) => {
      event.preventDefault()
      setSearchValue(event.target.value)
  }

  const handleCategory = (cat) => {
    setCategory(cat)
  }

  const handleButton = (event) => {
    console.log("button pressed")
    handleCategory(event.target.value)
  }

  return (
    <div id="buynow" className="product-grid">

    <div className="product-filter">

      <div className = "searchbar">
        <input type="text" value={searchValue} onChange={handleSearch} placeholder="Search for an item" /> 
        <button> Search </button>
      </div>

      <h2 className="home-title"> Fill Your Cart! </h2>

      <div className="categories">
        <button value="all categories" onClick={handleButton}> All Categories </button>
        <button value="clothing" onClick={handleButton}> Clothing </button>
        <button value="food" onClick={handleButton}> Food </button>
        <button value="accessories" onClick={handleButton}> Accessories </button>
        <button value="tech" onClick={handleButton}> Tech </button>
      </div>

    </div>

      <div className = "product-contents">

        {props.products.filter((currProduct) => {
          return "all categories" === category
          ? currProduct
          : currProduct.category === category ? currProduct : null
        })

          .filter((currProduct) => {
          return searchValue.toLowerCase() === "" ? currProduct : currProduct.name.toLowerCase().includes(searchValue)})

          .map((currProduct) => 
          <ProductCard key={currProduct.id} product={currProduct} productId={currProduct.id} showDescription={false}/>)}

      </div>

    </div>
  )
}

export default ProductGrid