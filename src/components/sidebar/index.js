import "./index.scss"
import logo1 from "../../assets/images/vs-41934.png"
import logo2 from "../../assets/images/vs-41934.png"
import { Link } from "react-router-dom"

import React from 'react'
import { NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome,faUser,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faGithub,faYoutube,faFacebook,faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function Sidebar() {
  return (
    <div className="nav-bar">
         <Link className="logo" to="/">
             <img src={logo1} alt="logo"></img>
         </Link>
         <nav>
             <NavLink exact="true" activeclassName="active" to="/">
                 <FontAwesomeIcon icon={faHome} color="#4f4f3e" title="Home"></FontAwesomeIcon>
             </NavLink>
             <NavLink exact="true" className="about-link" to="/about">
                 <FontAwesomeIcon icon={faUser} color="#4f4f3e" title="About"></FontAwesomeIcon>
             </NavLink>
             <NavLink exact="true" className="contact" to="/contact">
                 <FontAwesomeIcon icon={faEnvelope} color="#4f4f3e" title="Contact"></FontAwesomeIcon>
             </NavLink>
         </nav>
         <ul>
             <li>
                 <a target="_blank" href="https://github.com/vishal816728">
                     <FontAwesomeIcon icon={faGithub} color="#4f4f3e"></FontAwesomeIcon>
                 </a>
             </li>
             <li>
                 <a target="_blank" href="https://youtube.com/">
                     <FontAwesomeIcon icon={faYoutube} color="#4f4f3e"></FontAwesomeIcon>
                 </a>
             </li>
             <li>
                 <a target="_blank" href="https://Facebook.com/">
                     <FontAwesomeIcon icon={faFacebook} color="#4f4f3e"></FontAwesomeIcon>
                 </a>
             </li>
             <li>
                 <a target="_blank" href="https://LinkedIn.com/">
                     <FontAwesomeIcon icon={faLinkedin} color="#4f4f3e"></FontAwesomeIcon>
                 </a>
             </li>
             
         </ul>
    </div>
  )
}
