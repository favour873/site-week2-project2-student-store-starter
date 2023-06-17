import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import Logo from "../Logo/Logo"
import Notfound from "../NotFound/Notfound"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([])
  const [sidebarState, setSidebarState] = useState(false)
  const [isFetching, setIsfetching] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
      axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {setProducts(response.data.products)})
      .catch((error) => {console.error(error)})
  }, [])


  // let isFetching = false
  // (products ? isFetching = true : isFetching = false)

  return (
    <div className="app">

      <Router>

        <main>
          <Sidebar isActive={sidebarState} handleClick={() => {setSidebarState(!sidebarState)}}/>
          
          <section className="rightSection">
            <Navbar />
            <section className="body">
              <Hero />
              <Routes>
                <Route path="/" element={<Home products={products}/>}/>
                <Route path="/products/:productId" element={<ProductDetail/>} />
                <Route path="*" element={< Notfound />} />
                {/* <Route path="/logo" element={<Sidebar/>} />  */}
              </Routes>
            </section>


          </section>

        </main>

      </Router>

    </div>
  )
}
