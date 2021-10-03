// @ts-nocheck
import React, { useCallback, useEffect, useRef } from 'react';

import { Helmet } from 'react-helmet-async';
import useCanvas from './useCanvas';
import useEventListener from './useEventLisner';

const constants = {
  CANVAS_WIDTH: 600,
  CANVAS_HEIGHT: 149,
};
//   red: [5, 8, 50, 60, 65, 70, 120, 180],
//   green: [15, 18, 30, 70, 90],
const chartData = [
  {
    value: 5,
    type: 'red',
  },
  {
    value: 5,
    type: 'red',
  },
  {
    value: 5,
    type: 'red',
  },
  {
    value: 5,
    type: 'red',
  },
  {
    value: 10,
    type: 'red',
  },
  {
    value: 30,
    type: 'green',
  },
  {
    value: 67,
    type: 'green',
  },
  {
    value: 50,
    type: 'red',
  },
  {
    value: 89,
    type: 'green',
  },
  {
    value: 89,
    type: 'red',
  },
  {
    value: 200,
    type: 'green',
  },
  {
    value: 195,
    type: 'red',
  },
  {
    value: 204,
    type: 'green',
  },
  {
    value: 289,
    type: 'green',
  },
  {
    value: 300,
    type: 'red',
  },
  {
    value: 155,
    type: 'green',
  },
  {
    value: 90,
    type: 'red',
  },
  {
    value: 256,
    type: 'green',
  },

  {
    value: 400,
    type: 'green',
  },
  {
    value: 500,
    type: 'red',
  },
  {
    value: 700,
    type: 'green',
  },
];

export const onMouseHover = (
  canvasRef,
  clientY,
  tipRef,
  clientX,
  linePositions,
) => {
  // return undefined;
  let canvas = canvasRef.current;
  let tipCanvas = tipRef.current;
  if (canvasRef.current) {
    let ctx = canvasRef.current.getContext('2d');
    let tipCtx = tipCanvas.getContext('2d');

    let relativePosition = canvas.getBoundingClientRect();
    let mouseX = clientX - relativePosition.left;
    console.log('mouseX', mouseX);
    let hit = false;
    let hoveredRow = linePositions.current.filter(item => {
      return mouseX === item.startX;
    })[0];
    console.log('hoveredRow', hoveredRow);
    if (hoveredRow) {
      tipCanvas.style.position = 'absolute';
      tipCanvas.style.left = 600 + 'px';
      tipCanvas.style.left =
        hoveredRow.startX + canvas.getBoundingClientRect().left + 'px';
      tipCtx.fillStyle = 'rgb(255, 255, 255, 0.8)';
      tipCtx.fillRect(0, 0, tipCanvas.width, tipCanvas.height);
      tipCtx.fillStyle = '#a11f1f';
      ctx.font = '20px Georgia';
      tipCtx.fillText('Server Details', 5, 15);
    }
  }
};

export function TestCasesChart() {
  const linePositions = useRef([]);
  const currentXPosition = useRef(10);
  const [canvasRef, tipRef] = useCanvas(context =>
    chartData.map(
      (record, index) => mapChartData(record, index, context), // 10% padding from edge
    ),
  );

  const mapChartData = (record, index, ctx) => {
    // [5, 8, 50, 60, 65, 70, 120, 180],
    // let  x= currentXPosition.current;
    ctx.beginPath();
    ctx.moveTo(record.value, 0);
    ctx.lineTo(record.value, constants.CANVAS_HEIGHT);
    ctx.strokeStyle = record.type == 'red' ? '#FF0C03' : '#18D27A';
    ctx.stroke();
    // currentXPosition.current = x + constants.CANVAS_HEIGHT;
    linePositions.current.push({
      startX: record.value,
    });
    console.log(linePositions);
  };

  const handler =
    // useCallback(
    e => {
      console.log(e);
      const { clientX, clientY } = e;
      onMouseHover(canvasRef, clientY, tipRef, clientX, linePositions);
    };
  // ,
  // [canvasRef, tipRef],
  // );

  useEventListener('mousemove', handler);
  // $("#graph").mousemove(function(e){handleMouseMove(e);});

  // show tooltip when mouse hovers over dot
  function handleMouseMove(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mousemove stuff here
    var hit = false;
    for (var i = 0; i < dots.length; i++) {
      var dot = dots[i];
      var dx = mouseX - dot.x;
      var dy = mouseY - dot.y;
      if (dx * dx + dy * dy < dot.rXr) {
        tipCanvas.style.left = dot.x + 'px';
        tipCanvas.style.top = dot.y - 40 + 'px';
        tipCtx.clearRect(0, 0, tipCanvas.width, tipCanvas.height);
        tipCtx.fillText($(dot.tip).val(), 5, 15);
        hit = true;
      }
    }
    if (!hit) {
      tipCanvas.style.left = '-200px';
    }
  }
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <canvas
        border=" 1px solid "
        borderColor="grey4"
        data-testid="canvas"
        id="canvas"
        ref={canvasRef}
        width={constants.CANVAS_WIDTH}
        height={constants.CANVAS_HEIGHT}
      />
      <canvas id="tip" ref={tipRef} width={110} height={42} />
    </>
  );
}
