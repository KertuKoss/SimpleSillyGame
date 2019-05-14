
export default function sketch(p){
    
p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.background(126);
  }
  p.draw = ()=> {
    let rand = p.random(1,50)
    p.ellipse(p.mouseX-150, p.mouseY, rand, rand);   
    p.ellipse(p.mouseX/2, p.mouseY*2, rand, rand); 
    p.ellipse(p.mouseX*3, p.mouseY, rand, rand); 
    p.ellipse(p.mouseX, p.mouseY*4, rand, rand); 
    rand = p.random(1,50)
    p.ellipse(p.mouseX*2, p.mouseY/2, rand, rand);
    p.ellipse(p.mouseX/5, p.mouseY*2, rand, rand); 
    p.ellipse(p.mouseX*2, p.mouseY+150, rand, rand);
    rand = p.random(1,50)
    p.ellipse(p.mouseX/2, p.mouseY*4, rand, rand); 
    p.ellipse(p.mouseX*2, p.mouseY/2, rand, rand);
    rand = p.random(1,50)
    p.ellipse(p.mouseX*4, p.mouseY*4, rand, rand);
    p.ellipse(p.mouseX/2, p.mouseY*4, rand, rand); 
    p.ellipse(p.mouseX*2.5, p.mouseY*4, rand, rand);
  }
  p.mousePressed = () => {
    p.ellipse(p.mouseX,p.mouseY,50,50)
    p.fill(p.random(1,255))
    
  }
}