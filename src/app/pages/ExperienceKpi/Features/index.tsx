// @ts-nocheck

import React, { useRef, useEffect } from 'react';

const constants = {
  CANVAS_WIDTH: 100,
  CANVAS_HEIGHT: 100,
};
const data = [
  [4, 8],
  [10.6, 10.8],
  [11, 13],
  [22, 24],
];

function draw(exp) {
  const canvas = exp.canvas;
  exp.fillStyle = 'transparent';

  let slide = canvas.width / 26;
  let height = canvas.height;
  exp.fillRect(0, 0, canvas.width, canvas.height);
  //console.log(slide);
  //console.log(canvas.height);

  exp.fillStyle = '#CEF2FE';

  data.map(item => {
    exp.beginPath();
    exp.moveTo(slide * item[0], 0); // starting point (left ,top)
    exp.lineTo(slide * item[0], height); // bottom point (left ,top)
    exp.lineTo(slide * item[1], height); // bottom starting point  (left,top)
    exp.lineTo(slide * item[1], 0); //    last point (left , top)
    exp.strokeStyle = '#CEF2FE';
    exp.fill();
    exp.stroke();
  });

  requestAnimationFrame(() => draw(exp));
}

function ExpChart() {
  const expC = useRef();

  useEffect(() => {
    if (expC.current) {
      let exp = expC.current.getContext('2d');

      requestAnimationFrame(() => draw(exp));
      const handleResize = () => {
        exp.canvas.height = window.innerHeight;
        exp.canvas.width = window.innerWidth;
      };
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <canvas
        id="exp"
        style={{ width: '100%', height: '100%' }}
        ref={expC}
      ></canvas>
    </>
  );
}

export default ExpChart;
