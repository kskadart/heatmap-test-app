import React from 'react';
import './App.css';
import DrawHeatMap from "./components/heatmapPainter/DrawHeatmap";

function App() {
  return (
    <div style={{position: 'relative'}}>
      <img src="https://picsum.photos/id/237/200/300"
           alt="dog"
           style={{top: '0', width: '100%', height: '100%', objectFit: 'scale-down', position: "absolute"}}/>
      <DrawHeatMap/>
    </div>
  );
}

export default App;
