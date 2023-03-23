import React, {useRef} from 'react';
import './App.css';
import DrawHeatMap from "./components/heatmapPainter/DrawHeatmap";

function App() {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  return (
    <div className="App" style={{position: 'relative'}}>
      <img src="https://picsum.photos/id/237/200/300"
           alt="dog"
           style={{top: '0', width: '100%', height: '100%', objectFit: 'scale-down', position: "absolute"}}/>
      <DrawHeatMap windowX={windowWidth.current} windowY={windowHeight.current}/>
    </div>
  );
}

export default App;
