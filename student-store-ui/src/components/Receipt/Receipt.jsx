import React from 'react'

const Receipt = () => {
  return (
    <div>Receipt</div>
  )
}

export default Receipt

// import React from "react";
// import "./Receipt.css"; 

// const Receipt = ({ checkoutFormData, products, checkoutForm }) => {
//     const name = checkoutForm.name
//     const email = checkoutForm.email

    
//     return (

//         <div className="receipt-container">
//             <div className="receipt-mesage-container">
//                 <ul>
//                     {Object.keys(checkoutFormData).length > 0 ? (
//                         Object.keys(checkoutFormData).map((productID) => {
//                             const currProduct = products.find((item) => {return item.id == productID})
//                             if (currProduct) {
//                                 // return <li>Purchased {currProduct.name}</li>
//                                 return <div className="checkout-success">
//                                     <h3> Checkout Info 
//                                         <span className="icon button">
//                                             <i className="material-icons md-48">fact_check</i>
//                                         </span>
//                                     </h3>
//                                     <div className="card">
//                                         <header className="card-head">
//                                             <h4 className="card-title">Receipt</h4>
//                                         </header>
//                                         <section className="card-body">
//                                             <p className="header">Showing receipt for {name} available at {email}</p>
//                                             {/* <p> Items purchased: {currProduct.name}, {checkoutFormData[currProduct.id]}</p> */}
//                                             {/* <ul className="purchase">
//                                                 <li>2 total Flamin Hot Cheetos purchased at a cost of $1.50 for a total cost of $3.00.</li>
//                                                 <li>Before taxes, the subtotal was $3.00</li>
//                                                 <li>After taxes and fees were applied, the total comes out to $3.27</li>
//                                             </ul> */}
//                                         </section>
                            
//                                     </div>
//                                 </div>
//                             }
//                         })
//                     ) : (
//                         <li>No Purchases Found</li>
//                     )}
//                 </ul>
//             </div>
//         </div>

//     )

// }

// export default Receipt 