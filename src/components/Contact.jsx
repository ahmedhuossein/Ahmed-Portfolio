import React from 'react';
import './Contact.css';
import emailjs from "emailjs-com";

const Contact = ({contactRef}) => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_m6kkguf', 'template_edzss5s', e.target, '')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        e.target.reset();
        }
    
    return (
        <div  className="main1">
            <div ref={contactRef} className="contactm">Contact</div>
        
            <form onSubmit={sendEmail}>
                <input type="text" name="from_name" className="name" placeholder="Enter your name" />
                <input type="email" name="email_id" className="email" placeholder="Enter your email" />
                <textarea className="message" name="message" placeholder="Enter your message" cols="30" rows="5"></textarea>
                <input type="submit" className="send" value="Send"/>
            </form>
        </div>





    );





}

export default Contact;