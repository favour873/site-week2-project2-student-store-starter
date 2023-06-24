import React, {useState} from 'react'
import "./CheckoutForm.css"

const CheckoutForm = ({isActive, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) => {


  return (
    <div className="checkout-form"> 
      <h2> CheckoutForm </h2>
      <form onSubmit={(event) => {handleOnSubmitCheckoutForm(event)}}>
        <label htmlFor="name"> Name </label><br/>
        <input className="checkout-input" type="text" name="name" value={checkoutForm.name} onChange={(event) => handleOnCheckoutFormChange(event.currentTarget.name, event.currentTarget.value)} className="checkout-form-input"></input><br/><br/>
        
        <label htmlFor="email"> Email </label><br/>
        <input className="checkout-input" type="email" name="email" value={checkoutForm.email} onChange={(event) => handleOnCheckoutFormChange(event.currentTarget.name, event.currentTarget.value)} className="checkout-form-input"></input><br/><br/>

        <button type="submit" className="checkout-button" onClick={handleOnSubmitCheckoutForm}>Checkout</button>
      </form>

    </div>
  )
}

export default CheckoutForm