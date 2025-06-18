import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">
        Have questions, feedback, or need help? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <p className="contact-email">
       Or email us directly at <a href="mailto:support@civix.com">support@civix.com</a>
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;