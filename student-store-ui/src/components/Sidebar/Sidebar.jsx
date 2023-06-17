import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isActive = false, handleClick}) {

  return (
    <section className={ isActive ? "sidebar open" : "sidebar closed"}>
      <button onClick={handleClick}> Click </button>
      
    </section>
  )
}
