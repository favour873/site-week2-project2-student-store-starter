import React from 'react'
import "./ShoppingCart.css"
import {useState, useEffect} from "react"
import CheckoutForm from '../CheckoutForm/CheckoutForm'


const ShoppingCart = (props) => {
  
  let ids = Object.keys(props.shoppingCart)
  console.log("shopping cart currently", props.shoppingCart)

  const productsInCart = ids.map((id) => [props.products[id - 1].name, props.shoppingCart[id], props.products[id - 1].price, (props.products[id - 1].price * props.shoppingCart[id]).toFixed(2)])
  // console.log(productsInCart)

  const productDetailInCart = productsInCart.map((product) => <tr key={product.id}><td key={product.id}>{product[0]}</td><td key={product.id}>{product[1]}</td><td key={product.id}>${product[2]}</td><td key={product.id}>${product[3]}</td></tr>)
  // console.log("prodDetailInCart",productDetailInCart)

  let subtotal = 0
  for (let product of productsInCart) {
    subtotal += product[1] * product[2]
  }

  const total = subtotal + (subtotal * 0.0875)
  
  return (
    <div className="shopping-name">
        <h2>ShoppingCart</h2>

        <div>
          {ids.length === 0 
          ? <p className="notification"> No items added to cart yet. Start shopping now! </p>
          : 
          <table>
            <tbody>
              <tr key="sc-details">
                <th key="name">Name</th>
                <th key="quantity">Quantity</th>
                <th key="price">Unit Price</th>
                <th key="cost">Cost</th>
              </tr>
              {productDetailInCart}
              <tr key="st-details"> 
                <td key="subtotal"><strong>Subtotal</strong></td> 
                <td key="sb" className="subtotal"><strong>${subtotal.toFixed(2)}</strong></td>
              </tr>
              <tr key="tx-details"> 
                <td key="taxes"><strong>Taxes and Fees</strong></td> 
                <td key="tx"><strong>${(subtotal * 0.0875).toFixed(2)}</strong></td>
              </tr>
              <tr key="tt-details"> 
                <td key="total"><strong>Total</strong> </td> 
                <td key="tt"><strong>${total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </table>}
        </div>

        <CheckoutForm isActive={props.isActive} products={props.products} subtotal={subtotal} total={total} checkoutForm={props.checkoutForm} shoppingCart={props.shoppingCart} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}> </CheckoutForm>

    </div>
  )
}

export default ShoppingCart