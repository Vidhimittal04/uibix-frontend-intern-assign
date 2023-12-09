
import React, { useEffect, useRef, useState } from 'react';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [clearTimer, setClearTimer] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);

    const startDrawing = (e) => {
      setIsDrawing(true);
      draw(e);
      resetClearTimer();
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;

      ctx.fillStyle = '#FF6347';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#FF6347';

      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }

      resetClearTimer();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      resetClearTimer();
    };

    const resetClearTimer = () => {
      if (clearTimer) {
        clearTimeout(clearTimer);
      }

      const newTimer = setTimeout(() => {
        clearCanvas();
      }, 3000);

      setClearTimer(newTimer);
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);

      if (clearTimer) {
        clearTimeout(clearTimer);
      }
    };
  }, [isDrawing, clearTimer]);

  return (
    <canvas
      ref={canvasRef}
      width="1400"
      height="600"
      style={{ border: '1px solid #eee' }}
    >
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  );
};

export default DrawingCanvas;