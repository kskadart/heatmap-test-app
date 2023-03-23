import React, { useEffect, useRef } from 'react';
import heatmap from "@mars3d/heatmap.js";

interface DrawHeatMapProps {
  windowX: number;
  windowY: number;
}

const DrawHeatMap: React.FC<DrawHeatMapProps> = ({ windowX, windowY }) => {
  const heatmapContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const heatmapInstance = heatmap.create({
      // @ts-ignore
      container: heatmapContainerRef.current,
    });
    const points = [];
    const max = 1;
    const width = windowX;
    const height = windowY;
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
    console.log(data, windowX, windowY);
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
              width: `${window.innerWidth}px`,
              height: `${window.innerHeight}px`,
              pointerEvents: 'none'
        }}
        />
  );
};

export default DrawHeatMap;
