
import React from 'react';
import './Page.css';

const Page3 = () => {
  return (
    <div className="page" style={{ position: 'relative' }}>
      <img
        src="https://source.unsplash.com/1200x800/?nature" 
        alt="Nature Image"
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <div
        className="text-overlay"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h1>Welcome to Page 3</h1>
        <p>
          Immerse yourself in the beauty of nature. Explore serene landscapes
          and let the tranquility of the scenery captivate your senses.
        </p>
      </div>
    </div>
  );
};

export default Page3;
