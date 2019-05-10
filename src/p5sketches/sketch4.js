
export default function sketch(p){
p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
  }
  p.draw = ()=> {
    p.background(126);
    p.ellipse(p.mouseX-150, p.mouseY, 100, 100);   
    p.ellipse(p.mouseX/2, p.mouseY*2, 33, 33); 
    p.ellipse(p.mouseX*3, p.mouseY/2, 33, 33); 
    p.ellipse(p.mouseX, p.mouseY*4, 50, 50); 
    p.ellipse(p.mouseX*2, p.mouseY/2, 33, 33);
    p.ellipse(p.mouseX/5, p.mouseY*2, 75, 75); 
    p.ellipse(p.mouseX*2, p.mouseY+150, 33, 33);
    p.ellipse(p.mouseX/2, p.mouseY*4, 50, 50); 
    p.ellipse(p.mouseX*2, p.mouseY/2, 33, 33);
    p.ellipse(p.mouseX*4, p.mouseY*4, 40, 40);
    p.ellipse(p.mouseX/2, p.mouseY*4, 50, 50); 
    p.ellipse(p.mouseX*2.5, p.mouseY*4, 60, 60);
  }
}