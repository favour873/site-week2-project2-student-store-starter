import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import Home from "../Home/Home"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


export default function Navbar() {
  return (
    <div>

      <nav className="navbar">
        <Logo />
      <ul>    
        <li> </li>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        <li> <a href="#"> <i className="uil uil-instagram"></i> </a> </li>
        <li> <a href="#"> <i className="uil uil-facebook-f"></i> </a> </li>
        <li> <a href="#"> <i className="uil uil-twitter-alt"></i> </a> </li>
      
      
        <li> <a href="#hero"> Home </a> </li>
        <li> <a href="#about"> About Us </a> </li>
        <li> <a href="#contact"> Contact Us </a> </li>
        <li> <a href="#buynow"> Buy Now </a> </li>
      </ul>

      </nav>
  
  </div> 
)}
