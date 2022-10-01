import React from 'react'
import { Link } from "react-router-dom";
import '../startnav/Startnav.css'

const StartNav = () => {
  return (
    <div className='start-nav'>
      <Link to='/'><h1>Logo</h1></Link>
      <h2>LIBRARY MANAGEMENT SOFTWARE</h2>
    </div>
  )
}

export default StartNav
