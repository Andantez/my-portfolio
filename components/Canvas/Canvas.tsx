import p5Types from 'p5';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false, // Import react-p5 on the client side only
});

let count = 0;
let pathHeight: number;
const controlPoints = 10;
const offset = 152;
const animationSpeed = 0.35;
const Canvas = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    // use the parent to render canvas.
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    pathHeight = p5.windowHeight / 2;
    p5.fill('black');
  };

  // draw function is executed in an INFINITE LOOP
  const draw = (p5: p5Types) => {
    p5.clear();

    const startPositionX = p5.windowWidth / 2;
    const centerX = p5.windowWidth / 2;
    const centerY = p5.windowHeight / 2;

    // the height of the Waves
    // pathHeight += (centerY - p5.mouseY - pathHeight * 1.5) / 10;
    pathHeight += (centerY - pathHeight * 1.75) / 10; // Temporary

    p5.beginShape();
    p5.curveVertex(centerX, 0);

    for (let i = 0; i < controlPoints; i++) {
      const sinSeed = count + (i + (i % controlPoints)) * 100;
      const sinHeight = Math.sin(sinSeed / 200) * pathHeight;
      // yPos controls the y position of the control point and move it on mouse move
      const yPos = Math.sin(sinSeed / 100) * sinHeight + centerY;
      const controlPointX =
        (startPositionX / controlPoints) * i + startPositionX;
      const controlPointY = (yPos / controlPoints) * i;

      p5.curveVertex(controlPointX, controlPointY);
    }

    p5.curveVertex(p5.windowWidth, centerY);
    // add offset to the last control point is drew
    // off-screen
    p5.curveVertex(p5.windowWidth + offset, centerY);
    p5.curveVertex(p5.windowWidth + offset, 0);
    p5.curveVertex(p5.windowWidth + offset, 0);
    p5.endShape();
    count += animationSpeed;
  };

  const handleResize = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      className="wave-canvas"
      windowResized={handleResize}
    />
  );
};

export default Canvas;
