
//-------------------------------------------------------------------------------------------------------

// Drawing 

export default function sketch(p){
    let canvas;

    p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  }
  
  p.draw=() => {
    p.stroke(255);
    if (p.mouseIsPressed === true) {
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  }
}
