import React, { useEffect, useRef } from 'react';
import heatmap from "@mars3d/heatmap.js";

const DrawHeatMap = () => {
  const heatmapContainerRef = useRef<HTMLDivElement>(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const heatmapInstance = heatmap.create({
      // @ts-ignore
      container: heatmapContainerRef.current,
    });
    const points = [];
    const max = 1;
    let len = 100;

    while (len--) {
      let point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: 1
      };
      points.push(point);
    }
    let data = {
      max: max,
      data: points
    };
      console.log(data, width, height);

    // @ts-ignore
    heatmapInstance.setData(data);
  })
  return (
        <div
            ref={heatmapContainerRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${width}px`,
              height: `${height}px`,
              pointerEvents: 'none'
        }}
        />
  );
};

export default DrawHeatMap;
