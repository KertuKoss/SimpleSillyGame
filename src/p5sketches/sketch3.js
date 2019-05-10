
//-------------------------------------------------------------------------------------------------------

// Drawing 

export default function sketch(p){
    let canvas;
    let color = 255;

    p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  }
  
  p.draw=() => {
    p.stroke(color);
    if (p.mouseIsPressed === true) {
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  }
  p.mousePressed = () =>{
    color -= 20
    if (color < 10){
      color =255
    }
  }
}
