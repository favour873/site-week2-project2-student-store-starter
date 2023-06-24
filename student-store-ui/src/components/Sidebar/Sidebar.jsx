import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Receipt from "../Receipt/Receipt"
import "./Sidebar.css"

export default function Sidebar({isActive = false, handleClick, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, checkoutFormData}) {


  return (
    <section className={ isActive ? "sidebar open" : "sidebar closed"}>
      
      <button className="toggle-button" onClick={handleClick}> Click </button>
      
      {isActive
      ? (<div> 
        <ShoppingCart isActive={isActive} products={products} shoppingCart={shoppingCart}> </ShoppingCart> 
        <CheckoutForm isActive={isActive} checkoutForm={checkoutForm} shoppingCart={shoppingCart} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}> </CheckoutForm>
        <Receipt checkoutFormData={checkoutFormData} products={products} checkoutForm={checkoutForm}/>
      </div>)
      : null}
      
    </section>
  )
}
