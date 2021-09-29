// @ts-nocheck
import React, { useEffect, useRef } from 'react';

const useCanvas = draw => {
  const drawRef = useRef(null);
  const canvasRef = useRef(null);
  const tipRef = useRef(null);

  useEffect(() => {
    drawRef.current = draw;

    return () => {};
  }, []);

  useEffect(() => {
    drawRef.current(canvasRef.current.getContext('2d'));

    return () => {};
  }, [drawRef]);

  return [canvasRef, tipRef];
};

export default useCanvas;
