import React, { useState } from 'react';
import '../css/Home.css';

function Home() {
  const [message, setMessage] = useState('');

  // Dynamic greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const handleClick = () => {
    setMessage("You clicked the button! 😄");
  };

  return (
    <div className="home-container">
      <h1 className="greeting">{getGreeting()}! Welcome to the Home Page 😉</h1>
      
      <div className="interactive-content">
        <button onClick={handleClick} className="action-button">
          Click Me
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Home;
