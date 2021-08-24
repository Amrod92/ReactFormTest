import React from 'react';
import './Home.css';

function Home() {
  {
    /* Random phrases that updates the screen everytime the user refresh the page */
  }
  const headings = [
    'Welcome to the form test website',
    'Go to Insert Data',
    'Try to fill up the form'
  ];

  {
    /* Logic to generate the random phrases */
  }
  const randomHeading = headings[Math.floor(Math.random() * headings.length)];

  return (
    <div className='home-text'>
      <h2>
        <i>{randomHeading}</i>
      </h2>
    </div>
  );
}

export default Home;
