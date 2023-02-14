import React, { useEffect, useRef } from "react";

const Canvas = ({ width, height, size, density, smoothness, setWidth }) => {
  const canvasRef = useRef(null);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width * size;
    canvas.height = height * size;

    const gridWidth = width;
    const gridHeight = height;
    const cellSize = size;
    const count = smoothness;

    class Cell {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
      }
    }

    const randomNumber = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    let grid = [];

    const drawGrid = () => {
      for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          grid[y][x].draw();
        }
      }
    };

    const generator = () => {
      for (let i = 0; i < count; i++) {
        for (let y = 0; y < gridHeight; y++) {
          for (let x = 0; x < gridWidth; x++) {
            let neighborWall = 0;

            for (let k = y - 1; k < y + 2; k++) {
              for (let j = x - 1; j < x + 2; j++) {
                if (k == y && j == x) continue;

                if (k < 0 || j < 0 || k > gridHeight - 1 || j > gridWidth - 1) {
                  neighborWall++;
                  continue;
                }

                if (grid[k][j].color == "black") neighborWall++;
              }
            }

            if (neighborWall > 4) grid[y][x].color = "black";
            else grid[y][x].color = "white";
          }
        }
      }
      drawGrid();
    };

    const createNoise = () => {
      for (let y = 0; y < gridHeight; y++) {
        let row = [];

        for (let x = 0; x < gridWidth; x++) {
          const random = randomNumber(1, 100);

          let color;
          if (random > density) color = "white";
          else color = "black";

          const newCell = new Cell(x, y, cellSize, color);
          row.push(newCell);
        }
        grid.push(row);
      }
      generator();
    };

    createNoise();
  };

  useEffect(() => {
    init();
  }, [width, height, size, density, smoothness]);
  return (
    <div className="container">
      <canvas ref={canvasRef}></canvas>
      <button onClick={init} type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M24 40q-6.65 0-11.325-4.675Q8 30.65 8 24q0-6.65 4.675-11.325Q17.35 8 24 8q4.25 0 7.45 1.725T37 14.45V8h3v12.7H27.3v-3h8.4q-1.9-3-4.85-4.85Q27.9 11 24 11q-5.45 0-9.225 3.775Q11 18.55 11 24q0 5.45 3.775 9.225Q18.55 37 24 37q4.15 0 7.6-2.375 3.45-2.375 4.8-6.275h3.1q-1.45 5.25-5.75 8.45Q29.45 40 24 40Z" />
        </svg>
        Generate
      </button>
    </div>
  );
};

export default Canvas;
