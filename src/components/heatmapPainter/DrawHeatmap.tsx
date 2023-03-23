import React, { useEffect, useRef } from 'react';
import h337 from "@mars3d/heatmap.js";

interface DrawHeatMapProps {
  windowX: number;
  windowY: number;
}

const DrawHeatMap: React.FC<DrawHeatMapProps> = ({ windowX, windowY }) => {
  const heatmapContainerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (heatmapContainerRef.current) {
      const heatmapInstance = h337.create({
        container: heatmapContainerRef.current,
      });

      let points = [];
      let max = 0;
      let min = 0;
      let len = 10;

      while (len--) {
        let val = Math.floor(Math.random() * 100);
        max = Math.max(max, val);
        let point = {
          x: Math.floor(Math.random() * windowX),
          y: Math.floor(Math.random() * windowY),
          value: val
        };
        points.push(point);
      }
      let data = {
        max: max,
        min: min,
        data: points
      };
      console.log('Data', data);
      heatmapInstance.setData(data);

    }
  }, [windowX, windowY]);

  return (
        <canvas
            ref={heatmapContainerRef}
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}
            width={windowX}
            height={windowY}
        />
  );
};

export default DrawHeatMap;
