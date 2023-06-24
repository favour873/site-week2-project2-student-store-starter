import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import Logo from "../Logo/Logo"
import NotFound from "../NotFound/Notfound"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([])
  const [sidebarState, setSidebarState] = useState(false)
  const [isFetching, setIsfetching] = useState(false)
  const [shoppingCart, setShoppingCart] = useState({})
  const [checkoutFormData, setCheckoutFormData] = useState([]) 
  const [checkoutForm, setCheckoutForm] = useState({
    name : "",
    email : ""
  });

  useEffect(() => {
      axios
      .get("http://localhost:3001/store") // should store be here?
      .then((response) => {setProducts(response.data.products)})
      .catch((error) => {console.error(error)})
  }, [])

  const handleOnCheckoutFormChange = (name, event) => {
    setCheckoutForm((prev) => (
      {...prev, [name] : event}))
    }


  const handleOnSubmitCheckoutForm = (event) => {
    // handle onsubmit checkout form
    event.preventDefault()
    setCheckoutForm({
      name : "",
      email : ""
    })
    setShoppingCart({}) 
    setCheckoutFormData(shoppingCart)
    // console.log("checkout form data:", checkoutFormData) 

  }

  const handleAddItemToCart = (id) => {
    // handle adding items
    // console.log("before if else", shoppingCart, id, shoppingCart[id])

    if (`${id}` in shoppingCart) {
      // console.log("if case ran")
      setShoppingCart((prevQuant) => ({...prevQuant, [id] : prevQuant[id] + 1}))
    } else {
      // console.log("else case ran")
      setShoppingCart((prevQuant) => ({...prevQuant, [id] : 1}))   
    }
  }

  const handleRemoveItemFromCart = (id) => {
    // handle removing items
    // console.log("This is handle remove item, product number:", id)

    if (`${id}` in shoppingCart) {
      // console.log("if case ran")
      // console.log("there is currently", shoppingCart[id], "in object.", "the object:", shoppingCart)
      if (shoppingCart[id] === 1) {
        // console.log("before deletion", shoppingCart[id], shoppingCart);
        const tempCart = {...shoppingCart}
        delete tempCart[id]
        setShoppingCart(tempCart)
        // return here?
        // console.log("after deletion", shoppingCart[id], shoppingCart);
      } else  {
      setShoppingCart((prevQuant) => ({...prevQuant, [id] : prevQuant[id] - 1}))}
    } else {
      // console.log("else case ran", shoppingCart)
      return
    }
  }

  const quantity = (id) => {
    // console.log(shoppingCart[id])
    shoppingCart[id]
  }


  // let isFetching = false
  // (products ? isFetching = true : isFetching = false)

  return (
    <div className="app">

      <Router>

        <main>
          <Sidebar isActive={sidebarState} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleClick={() => {setSidebarState(!sidebarState)}} checkoutFormData={checkoutFormData}/>
          
          <section className="rightSection">
            <Navbar />
            <section className="body">
              <Hero />
              <Routes>
                <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}/>
                <Route path="/store/:productId" element={<ProductDetail quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} /> 
                {/* do i need to update this to <Route path="/:productId" element={<ProductDetail/>} />  */}
                <Route path="*" element={< NotFound />} />
                {/* <Route path="/logo" element={<Sidebar/>} />  */}
              </Routes>
            </section>


          </section>

        </main>

      </Router>

    </div>
  )
}
