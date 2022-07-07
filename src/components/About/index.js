import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Sidebar from '../sidebar'
import "./index.scss"
import {faReact,faHtml5,faCss3,faNodeJs,faJs} from "@fortawesome/free-brands-svg-icons"
import {FaEthereum} from "react-icons/fa"
import {DiMongodb,DiPython} from "react-icons/di"


export default function About() {
  return (
      <div className="container about-page">
         <div className='text-zone'>
              <h1>About Me</h1><br/>
              <p>
                  I'm very ambitious Full stack Developer Looking for a role in a well establish IT company with the opportunity to work with the latest technologies on challening and diverse projects.
              </p>
              <p>
                  I'm quietly confident,naturall curious,and perpectually working on improving my chops one design problem at a time.
              </p>
              <p>
              If I need to define myself in one sentence that would be a family person,a sport fanatic,tech obsessed and love trading.
              </p>
         </div>
         <div className="rightSide1" >
          <div className="rightSideLogo logoposition1">
                <FontAwesomeIcon className='icon1' icon={faReact} size="3x" title='React'></FontAwesomeIcon>
          </div>
          <div className="rightSideLogo logoposition2">
                <FontAwesomeIcon className='icon1' icon={faHtml5} size="3x" title='Html5'></FontAwesomeIcon>
          </div>
          <div className="rightSideLogo logoposition3">
                <FontAwesomeIcon className='icon1' icon={faCss3} size="3x" title='Css'></FontAwesomeIcon>
          </div>
          <div className="rightSideLogo logoposition4">
                <FontAwesomeIcon className='icon1' icon={faJs} size="3x" title='JavaScript'></FontAwesomeIcon>
          </div>
          <div className="rightSideLogo logoposition5">
                <FontAwesomeIcon className='icon1' icon={faNodeJs} size="3x" title='NodeJs'></FontAwesomeIcon>
          </div>
          <div className="rightSideLogo logoposition6" title="Ethereum">
                <FaEthereum size="3x" />
          </div>
          <div className="rightSideLogo logoposition7" title="MongoDB" >
                <DiMongodb size="3x" />
          </div>
          <div className="rightSideLogo logoposition8" title="Python" >
                <DiPython size="2x" />
          </div>
          <div className="rightSideLogo logoposition9" title="Upcoming" >
               
          </div>
          <div className="rightSideLogo logoposition10" title="Upcoming" >
                
          </div>
          </div>
      </div>
  )
}
