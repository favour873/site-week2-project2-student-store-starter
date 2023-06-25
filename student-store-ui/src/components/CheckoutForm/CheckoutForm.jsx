import React, { useState } from "react";
import "./CheckoutForm.css"


const CheckoutForm = ({products, shoppingCart, CheckoutForm, total, subtotal}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const handleCheckout = () => {
    sendReceipt(name, email);
    setShowReceipt(true);
  };

  const sendReceipt = (name, email) => {
    console.log(`Sending receipt to ${email} for ${name}`);
  };

  const displayReceipt = Object.keys(shoppingCart).map((id) => 
  <li> {shoppingCart[id]} total {products[id - 1].name} purchased at a cost of ${(products[id - 1].price).toFixed(2)} for a total cost of ${((products[id - 1].price)*(shoppingCart[id])).toFixed(2)} <br/><br/></li>
  ) 

  
  
  return (
    <div className="receipt">
      
      {!showReceipt ? (

        <form>
          <h2>Checkout Form</h2>
          <label>
          <h3> Name: </h3>
            <input className="checkout-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            <h3> Email: </h3>
            <input className="checkout-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <button className="checkout-button" type="button" onClick={handleCheckout}>
            Checkout
          </button>
        </form>
      ) : (
        <div className="receipt">
          <h2>Receipt:</h2>

          <ul>
            <li key="thanks"> Thank you {name} your purchase! A receipt has been sent to your email address at {email} <br/><br/> </li>
            {displayReceipt}
            <li key="subtotal"> Before taxes, the subtotal was ${subtotal.toFixed(2)}</li>   
            <li key="after-tax"> After taxes and fees were applied, the total comes out to ${total.toFixed(2)} </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm


// import React, {useState} from 'react'
// import "./CheckoutForm.css"

// const CheckoutForm = ({isActive, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) => {


//   return (
//     <div className="checkout-form"> 
//       <h2> CheckoutForm </h2>
//       <form onSubmit={(event) => {handleOnSubmitCheckoutForm(event)}}>
//         <label htmlFor="name"> Name </label><br/>
//         <input className="checkout-input" type="text" name="name" value={checkoutForm.name} onChange={(event) => handleOnCheckoutFormChange(event.currentTarget.name, event.currentTarget.value)} className="checkout-form-input"></input><br/><br/>
        
//         <label htmlFor="email"> Email </label><br/>
//         <input className="checkout-input" type="email" name="email" value={checkoutForm.email} onChange={(event) => handleOnCheckoutFormChange(event.currentTarget.name, event.currentTarget.value)} className="checkout-form-input"></input><br/><br/>

//         <button type="submit" className="checkout-button" onClick={handleOnSubmitCheckoutForm}>Checkout</button>
//       </form>

//     </div>
//   )
// }

// export default CheckoutForm