
import React, { useState } from 'react';

const Page2 = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const pageStyle = {
    flex: '0 0 100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    filter: hovered ? 'brightness(1.2)' : 'brightness(1)',
    backgroundImage: 'url("https://source.unsplash.com/1200x800/?light")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', 
  };

  return (
    <div className={`page ${hovered ? 'hovered' : ''}`} style={pageStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1>Page 2 - Full Image</h1>
      <p>Hover over the content to see the effect!</p>
    </div>
  );
};

export default Page2;
