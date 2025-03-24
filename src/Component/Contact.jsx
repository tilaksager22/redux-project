import React, { useState } from 'react';
import '../css/contact.css'; // Make sure to add custom CSS for styling

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1 className="greeting">{getGreeting()}! Welcome to the Contact Page 📳</h1>
      
      {/* Contact Form */}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank you for contacting us, {name}!</h2>
          <p>We will get back to you soon.</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
