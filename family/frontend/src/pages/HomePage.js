// frontend/src/pages/HomePage.js
import React from 'react';

function HomePage() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/New_York',
  });

  return (
    <div className="container mt-5">
      <h1>Welcome to YourApp</h1>
      <p className="lead">Today's date: {today}</p>
      <p>This is the homepage of your application. Navigate using the menu above.</p>
    </div>
  );
}

export default HomePage;