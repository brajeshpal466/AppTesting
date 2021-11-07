// @ts-nocheck

import React, { useRef, useEffect } from 'react';

const constants = {
  CANVAS_WIDTH: 100,
  CANVAS_HEIGHT: 100,
};
// const data = [
//   { start : 4,
//    end :  8 },
//   { start : 10.6,
//    end :  10.8 },
//   { start :  11 ,
//    end :  13 },
//   {  start : 22,
//     end : 24},
// ];

let arr = [];
let columnPos = [];

let relativepos;

// draw for particular ploting area
function drawArea(exp, width, height, item) {
  let slide = width / 26;

  exp.beginPath();
  exp.moveTo(slide * item.start, 0); // starting point (left ,top)
  exp.lineTo(slide * item.start, height); // bottom point (left ,top)
  exp.lineTo(slide * item.end, height); // bottom starting point  (left,top)
  exp.lineTo(slide * item.end, 0); //    last point (left , top)
  exp.strokeStyle = '#CEF2FE';
  exp.fill();
  exp.stroke();
  let left = relativepos.left;
  //console.log( relativepos.width/26);
  //console.log(width/26);

  arr.push({
    left: left,
    start: (relativepos.width / 26) * item.start + left,
    end: (relativepos.width / 26) * item.end + left,
    val: item,
    tippos: (relativepos.width / 26) * item.start,
  });
}

// draw method of canvas

function draw(exp, tipRef, w, h, data) {
  const canvas = exp.canvas;
  exp.fillStyle = 'transparent';
  let tipElement = tipRef.current;

  ////console.log(tipElement);

  exp.fillRect(0, 0, w, h);

  arr = [];
  columnPos = [];
  exp.fillStyle = '#CEF2FE';

  data.map(item => {
    drawArea(exp, w, h, item);
  });
}
function hoverColumn(x) {
  let hoveredCol = arr.filter(
    item => item.start - 1 < x && x < item.end + 1,
  )[0];

  return hoveredCol;
}

function ExpChart({ data }) {
  const expRef = useRef();
  const tipRef = useRef();

  useEffect(() => {
    let exp = expRef.current.getContext('2d');
    if (expRef.current) {
      relativepos = expRef.current.getBoundingClientRect();
      draw(exp, tipRef, window.innerWidth, window.innerHeight, data);
      const handleResize = () => {
        relativepos = expRef.current.getBoundingClientRect();
        //  //console.log(exp);
        exp.canvas.height = window.innerHeight;
        exp.canvas.width = window.innerWidth;
        draw(exp, tipRef, window.innerWidth, window.innerHeight, data);
      };

      handleResize();

      const mouseHandler = e => {
        if (expRef.current) {
          const tooltip = tipRef.current.getContext('2d');
          tooltip.fillStyle = '#ffffff';
          tooltip.font = '12px Verdana';
          tipRef.current.position = 'absolute';

          const val = hoverColumn(e.clientX);

          if (val && e.clientX < 1300) {
            //console.log(val.val);

            tipRef.current.style.display = 'block';
            tipRef.current.style.left = val.tippos + 'px';
            tooltip.save();
            ////console.log(tooltip);
            tooltip.clearRect(0, 0, 100, 50);
            tooltip.fillRect(0, 0, 100, 50);
            tooltip.fillStyle = '#000000';
            tooltip.fillText(val.val.start, val.val.end, 10, 15);
            tooltip.restore();
          } else {
            tipRef.current.style.display = 'none';
          }
        }
      };
      expRef.current.addEventListener('mousemove', mouseHandler);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', mouseHandler);
        window.removeEventListener('resize', handleResize);
      };
    }

    //
  }, []);

  return (
    <>
      <canvas
        id="exp"
        style={{ width: '100%', height: '100%' }}
        ref={expRef}
      ></canvas>
      <canvas
        ref={tipRef}
        height={50}
        width={100}
        style={{
          position: 'absolute',
          background: 'transparent',
          display: 'none',
          zIndex: '2',
        }}
      ></canvas>
    </>
  );
}

export default ExpChart;
