import React,{useRef} from 'react'
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.scss"
import {AiOutlineContacts,AiOutlineMail,AiOutlinePhone} from "react-icons/ai"


export default function Contact() {
  const notify = () => toast("Contact Submitted Successfully.",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_j7sgkb2',
      'template_onm6xth',
      form.current,
      '-EBD_P0C-ZAdxiLLf')
      .then((result) => {
          console.log(result.text);
          <ToastContainer />
      }, (error) => {
          console.log(error.text)
      })
  };
  return (
    <div  className="container contact-page"> 
         <div className='text-zone'>
           <h1>Contact_Me</h1> 
           <p>I would love to work as a freelancer,But if you Have another question or query don't hesitate to contact me.</p>
         <form ref={form} onSubmit={sendEmail} className="form_container">
        
            <input type="text" name="user_name" className='user_name_input' placeholder='Name' />
            
            <input type="email" name="user_email" className='user_email_input' placeholder='Email'/>
            
            <textarea name="message" className='user_textarea_input' placeholder='Message'/>
            <input type="submit" value="Send" className='user_btn'/>
          </form>
          </div>  
          <div className="rightSide2" >
          <div className="rightSidecontactContainer">
             <AiOutlineContacts size="1x" />
             <p><AiOutlineMail/>&nbsp;Email:&nbsp;visahlsingh0512@gmail.com</p>
             <p><AiOutlinePhone/>&nbsp;Phone:&nbsp;+444-444-4444</p>
          </div>
       </div>
    </div>
  )
}
