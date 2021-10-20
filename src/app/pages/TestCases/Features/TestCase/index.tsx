// @ts-nocheck

import React, { useRef, useEffect } from 'react';

const constants = {
  CANVAS_WIDTH: 100,
  CANVAS_HEIGHT: 100,
};
const data = [
  // [4, 8],
  // [10.6, 10.8],
  // [11, 13],
  // [22, 24],
  {
    value: 4,
    type: 'green',
  },
  {
    value: 6,
    type: 'red',
  },
  {
    value: 10,
    type: 'green',
  },
  {
    value: 14,
    type: 'red',
  },
  {
    value: 19,
    type: 'green',
  },

  {
    value: 22,
    type: 'red',
  },
];

let arr = [];
let columnPos = [];

let relativepos;

// draw for particular ploting area
function drawArea(testcase, width, height, item) {
  let slide = width / 26;

  testcase.beginPath();
  testcase.moveTo(slide * item.value, 0); // starting point (left ,top)
  testcase.lineTo(slide * item.value, height); // bottom point (left ,top)
  //testcase.lineTo(slide * item[1], height); // bottom starting point  (left,top)
  // testcase.lineTo(slide * item[1], 0); //    last point (left , top)
  testcase.strokeStyle = item.type === 'red' ? 'red' : 'green';
  testcase.fill();
  testcase.stroke();
  let left = relativepos.left;
  //console.log( relativepos.width/26);
  //console.log(width/26);

  arr.push({
    left: left,
    start: (relativepos.width / 26) * item.value + left,
    val: item.value,
    tippos: (relativepos.width / 26) * item.value,
  });
}

// draw method of canvas

function draw(testcase, tipRef, w, h) {
  const canvas = testcase.canvas;
  testcase.fillStyle = 'transparent';
  let tipElement = tipRef.current;

  ////console.log(tipElement);

  testcase.fillRect(0, 0, w, h);

  arr = [];
  columnPos = [];
  testcase.fillStyle = '#CEF2FE';

  data.map(item => {
    drawArea(testcase, w, h, item);
  });
}
function hoverColumn(x) {
  let hoveredCol = arr.filter(
    item => item.start - 1 <= x && x <= item.start,
  )[0];
  console.log(hoveredCol);
  return hoveredCol;
}

export function TestCasesChart() {
  const testcaseRef = useRef();
  const tipRef = useRef();

  useEffect(() => {
    let testcase = testcaseRef.current.getContext('2d');
    if (testcaseRef.current) {
      relativepos = testcaseRef.current.getBoundingClientRect();
      draw(testcase, tipRef, window.innerWidth, window.innerHeight);
      const handleResize = () => {
        relativepos = testcaseRef.current.getBoundingClientRect();
        //  //console.log(testcase);
        testcase.canvas.height = window.innerHeight;
        testcase.canvas.width = window.innerWidth;
        draw(testcase, tipRef, window.innerWidth, window.innerHeight);
      };

      handleResize();

      const mouseHandler = e => {
        if (testcaseRef.current) {
          const tooltip = tipRef.current.getContext('2d');
          tooltip.fillStyle = '#ffffff';
          tooltip.font = '12px Verdana';
          tipRef.current.position = 'absolute';

          const val = hoverColumn(e.clientX);

          if (val && e.clientX < 1300) {
            console.log('match');

            tipRef.current.style.display = 'block';
            tipRef.current.style.left = val.tippos - 50 + 'px';
            tooltip.save();
            ////console.log(tooltip);
            tooltip.clearRect(0, 0, 100, 50);
            tooltip.fillRect(0, 0, 100, 50);
            tooltip.fillStyle = '#000000';
            tooltip.fillText(val.val, 10, 15);
            tooltip.restore();
          } else {
            tipRef.current.style.display = 'none';
            console.log('not match');
          }
        }
      };
      testcaseRef.current.addEventListener('mousemove', mouseHandler);

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
        id="testcase"
        style={{ width: '100%', height: '100%' }}
        ref={testcaseRef}
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
