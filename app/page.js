import React from 'react';

const HomePage = () => {
  return (
    <div className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>Your journey begins here.</p>
      <div className="cta-buttons">
        <button onClick={() => window.location = '#projects'}>View Projects</button>
        <button onClick={() => window.location = '#contact'}>Contact Me</button>
      </div>
    </div>
  );
}

export default HomePage;