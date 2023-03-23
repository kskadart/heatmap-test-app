import React, { useEffect, useRef } from 'react';
import h337 from "@mars3d/heatmap.js";

interface DrawHeatMapProps {
  windowX: number;
  windowY: number;
}

const DrawHeatMap: React.FC<DrawHeatMapProps> = ({ windowX, windowY }) => {
  const heatmapContainerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const heatmapInstance = h337.create({
      // @ts-ignore
      container: document.querySelector('.App')
      // TODO(ada): the heatmap doesn't work with <heatmapContainerRef.current>.
      //  It works if use querySelector <Element> and set className for the element that INCLUDE this module?
      // container: heatmapContainerRef.current,
    });
    const points = [];
    const max = 1;
    const width = windowX;
    const height = windowY;
    let len = 250;

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
        <canvas
            ref={heatmapContainerRef}
            // style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}
            width={windowX}
            height={windowY}
        />
  );
};

export default DrawHeatMap;
