
import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import DrawingCanvas from './DrawingCanvas';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (e) => {
    if (e.deltaY > 0 && currentPage < 2) {
      setCurrentPage(currentPage + 1);
    } else if (e.deltaY < 0 && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container" onWheel={handleScroll}>
      <div className="pages" style={{ transform: `translateX(-${currentPage * 100}vw)` }}>
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
      <DrawingCanvas />
    </div>
  );
}

export default App;
