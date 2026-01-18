import React from 'react';

const Contact = ({ isVisible }) => {
  return (
    <div className={`contact-page ${isVisible ? 'visible' : ''}`}>
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>I am always open to new opportunities and collaborations.</p>
        <p>Feel free to reach out via email:</p>
        <a href="mailto:your.email@example.com" className="contact-email">your.email@example.com</a>
      </div>
    </div>
  );
};

export default Contact;
