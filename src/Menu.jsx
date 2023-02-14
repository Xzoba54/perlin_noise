const Menu = ({ width, setWidth, height, setHeight, size, setSize, density, setDensity, smoothness, setSmoothness }) => {
  return (
    <div className="menu">
      <div className="menu__item">
        <span>Width: {width}</span>
        <input type="range" min="8" max="120" value={width} onChange={(e) => setWidth(e.target.value)} />
      </div>
      <div className="menu__item">
        <span>Height: {height}</span>
        <input type="range" min="8" max="120" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="menu__item">
        <span>Cell size: {size}</span>
        <input type="range" min="25" max="250" value={size} onChange={(e) => setSize(e.target.value)} />
      </div>
      <div className="menu__item">
        <span>Density: {density}</span>
        <input type="range" min="1" max="100" value={density} onChange={(e) => setDensity(e.target.value)} />
      </div>
      <div className="menu__item">
        <span>Smoothness: {smoothness}</span>
        <input type="range" min="1" max="80" value={smoothness} onChange={(e) => setSmoothness(e.target.value)} />
      </div>
    </div>
  );
};

export default Menu;
