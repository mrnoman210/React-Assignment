import React from 'react'
import {FaSearch , FaTwitter , FaFacebookF, FaInstagram} from "react-icons/fa"
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
     
  return (
    <>
    <nav id='navbar'>
        <div id='searchButton'>
             <i className='searchIcon'><FaSearch/></i>
    <input placeholder='Search...' className='SearchButtonNavbar'/>
    </div> 
     <Link to={'business'} className="ForLinks">
     <h1 id='MagdesignHeading'>MAGDESIGN</h1>
     </Link>
     <span id='NavbarSocialLinks'>
        <Link to={"/"} className="ForLinks"><FaTwitter/></Link>
        <Link to={"/"} className="ForLinks"><FaFacebookF/></Link>
        <Link to={"/"} className="ForLinks"><FaInstagram/></Link>
     </span>
    </nav>
  
    </>
  )
}

export default Navbar