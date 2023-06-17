import React from 'react'
import "./Logo.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from '../Home/Home'


const Logo = () => {
  return (
    <div className="logo">
      <a href="/"> <img src="src/components/Logo/logo.png" alt="codepath logo"/> </a>
    </div>
  )
}

export default Logo