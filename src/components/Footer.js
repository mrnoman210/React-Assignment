import React from 'react'
import { FaFacebookF, FaHeart, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import "./Footer.css"

function Footer() {
  return (
    <footer>
         <div className='container'>
<div className='subsfornews'>
     <div className='footerDataAlign'>
<h2>Subscribe to newsletter</h2>
<div className='inputemailarea'>
<input className='InputFooterArea' placeholder='Enter your Email'/>
<button className='subsribeButton'>SUBSCRIBE</button>
     </div>
</div>
</div>
</div>
<div className='socialmediaApps'>
     <div className='socialMeidaDesign'><FaFacebookF/></div>
     <div className='socialMeidaDesign'><FaTwitter/></div>
     <div className='socialMeidaDesign'><FaLinkedinIn/></div>
     <div className='socialMeidaDesign'><FaYoutube/></div>
</div>
<div className='aligndescription'>
<p className='footerdescription'>Copyright ©2022 All rights reserved | This template is made with <div className='heartFooter'><FaHeart/></div> by <div className='hoverColorib displayinline' >Colorlib</div></p>
<p className='footerdescription'>   
<div className='hoverColorib displayinline underLIne' > Terms & Conditions  </div><p className='displayinline'>  /  </p>  
<div className='hoverColorib displayinline underLIne' >Privacy Policy</div></p>
 </div>

    </footer>
  )
}

export default Footer