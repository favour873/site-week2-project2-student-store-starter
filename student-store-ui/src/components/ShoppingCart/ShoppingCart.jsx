import React from 'react'
import "./ShoppingCart.css"
import {useState, useEffect} from "react"


const ShoppingCart = (props) => {

  // create a new array of objects
    // contains {name, price, quantity}
  // map through this array to display cart
    // map => <li> product.name </li>
  // have a separate total cart value calc
    // loop through this array and calculate total

  
  let ids = Object.keys(props.shoppingCart)
  console.log("shopping cart currently", props.shoppingCart)

  const productsInCart = ids.map((id) => [props.products[id - 1].name, props.shoppingCart[id], props.products[id - 1].price, (props.products[id - 1].price * props.shoppingCart[id]).toFixed(2)])
  // console.log(productsInCart)

  const productDetailInCart = productsInCart.map((product) => <tr><td>{product[0]}</td><td>{product[1]}</td><td>${product[2]}</td><td>${product[3]}</td></tr>)
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
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Cost</th>
              </tr>
              {productDetailInCart}
              <tr> 
                <td><strong>Subtotal</strong></td> 
                <td className="subtotal"><strong>${subtotal.toFixed(2)}</strong></td>
              </tr>
              <tr> 
                <td><strong>Taxes and Fees</strong></td> 
                <td><strong>${(subtotal * 0.0875).toFixed(2)}</strong></td>
              </tr>
              <tr> 
                <td><strong>Total</strong> </td> 
                <td><strong>${total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </table>}
        </div>

    </div>
  )
}

export default ShoppingCart