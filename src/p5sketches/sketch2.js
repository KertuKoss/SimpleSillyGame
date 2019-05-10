//Changing colors 

export default function sketch(p){
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.fill(0, 70);
    p.background(204); 
  }
  p.draw = () => {
  } 
  
  p.mousePressed = () => {
    p.rect(p.mouseX, p.mouseY, p.random(10,p.windowWidth/2), p.random(10,p.windowHeight/2));
  }
  

}