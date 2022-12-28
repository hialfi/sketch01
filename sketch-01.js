const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    const w = width * 0.135;
    const h = height * 0.135;
    const gap = width * 0.03;
    const cx = width * 0.167;
    const cy = height * 0.167;
    let x, y;

    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        x = cx + (w + gap)*i;
        y = cy + (h + gap)*j;

        context.beginPath();
        context.lineWidth = 4;
        context.arc(x, y, w/2, 0, Math.PI*2);
        context.strokeStyle = 'white';
        context.stroke();
        
        if (Math.random() > 0.7){
          context.beginPath();
          context.arc(x, y, w/2, 0, Math.PI*2);
          context.fillStyle = 'white';
          context.fill();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);