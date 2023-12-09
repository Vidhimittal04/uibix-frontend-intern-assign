
import React, { useState } from 'react';

const Page1 = () => {
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
  };

  const imgStyle = {
    width: '80%',
    maxWidth: '600px',
    marginTop: '20px',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    transform: hovered ? 'rotate(5deg)' : 'rotate(0)',
  };

  return (
    <div className={`page ${hovered ? 'hovered' : ''}`} style={pageStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1>Interactive Page</h1>
      <p>Hover over the content to see the effect!</p>
      <img src="https://placekitten.com/800/400" alt="Kitten" style={imgStyle} />
    </div>
  );
};

export default Page1;
