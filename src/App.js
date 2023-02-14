import { useState } from "react";

import Menu from "./Menu";
import Canvas from "./Canvas";

const App = () => {
  const [width, setWidth] = useState(32);
  const [height, setHeight] = useState(32);
  const [size, setSize] = useState(25);
  const [density, setDensity] = useState(60);
  const [smoothness, setSmoothness] = useState(3);

  return (
    <div className="app">
      <Menu width={width} setWidth={setWidth} height={height} setHeight={setHeight} size={size} setSize={setSize} density={density} setDensity={setDensity} smoothness={smoothness} setSmoothness={setSmoothness} />
      <Canvas width={width} height={height} size={size} density={density} smoothness={smoothness} setWidth={setWidth} />
    </div>
  );
};

export default App;
