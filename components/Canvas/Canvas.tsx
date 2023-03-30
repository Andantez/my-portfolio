import p5Types from 'p5';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false, // Import react-p5 on the client side only
});
const Canvas = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    // use the parent to render canvas.
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  // draw function is executed in an INFINITE LOOP
  const draw = (p5: p5Types) => {
    p5.background(0); // TEMPORARY
    p5.ellipse(50, 50, 70, 70); // TEMPORARY
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
