import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
        <div className="main1">
            <div className="contactm">Contact</div>
            <form>
                <input type="text" className="name" placeholder="Enter your name" />
                <input type="email" className="email" placeholder="Enter your email" />
                <textarea className="message" placeholder="Enter your message" cols="30" rows="5"></textarea>
                <input type="submit" className="send" placeholder="Send"/>
            </form>
        </div>





    );





}

export default Contact;