import React from 'react'
import {Link} from "react-router-dom"
import "./index.scss"
import img1 from "../../assets/images/responsive-web-design-page-promotion-different-display-devices-office-studio-desk-cioncept-graphic-elements-wall-174870257.jpg"
import img2 from "../../assets/images/og-img-webdesignmuseum.png"
import img3 from "../../assets/images/Web-Design-Slogans (1).webp"
export default function Home() {
  return (
    <div className='container home-page'>
           <div className='text-zone'>
               <h1>Hi,<br /> I'm
               Vishal
               <br/>
               <span>Web Developer</span>
               </h1>
               <h2>FULL Stack Mern Developer / JavaScript Expert</h2>
               <Link to="/contact" className="flat-button">Contact-Me</Link>
           </div>
           <div className="rightSide" >
          <div className="rightSideImgContainer">
            <img src={img3} alt="img3" />
            <img src={img1} alt="img1" width="400px"/>
            <img src={img2} alt="img2" />
          </div>
       </div>
    </div>
  )
}
