// Changing colors 

// export default function sketch(p){
//     let canvas;

//     p.setup = () => {
//       canvas = p.createCanvas(300, 200);
//       p.noStroke();
//     }

//     p.draw = () => {
//       p.background('orangered');
//       p.ellipse(150, 100, 100, 100);
//     }

//     p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
//       if(canvas) //Make sure the canvas has been created
//         p.fill(newProps.color);
//     }
// }

//-------------------------------------------------------------------------------------------------------

// Drawing 

// export default function sketch(p){
//     let canvas;

//     p.setup = () => {
//     canvas = p.createCanvas(710, 400);
//     p.background(0);
//   }
  
//   p.draw=() => {
//     p.stroke(255);
//     if (p.mouseIsPressed === true) {
//         p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
//     }
//   }
// }


//--------------------------------------------------------------------------------------------------------

// MY favourite, fading connected dots
// Taken from https://p5js.org/examples/hello-p5-drawing.html  

export default function sketch(p){
    // All the paths
    let paths = [];
    // Are we painting?
    let painting = false;
    // How long until the next circle
    let next = 0;
    // Where are we now and where were we?
    let current;
    let previous;
    let canvas;

    p.setup=()=> {
    canvas = p.createCanvas(720, 400);
    current = p.createVector(0,0);
    previous = p.createVector(0,0);
    };

    p.draw=()=> {
        p.background(200);
    
    // If it's time for a new point
    if (p.millis() > next && painting) {

        // Grab mouse position      
        current.x = p.mouseX;
        current.y = p.mouseY;

        // New particle's force is based on mouse movement
        let force = p5.Vector.sub(current, previous);
        force.p.mult(0.05);

        // Add new particle
        paths[paths.length - 1].add(current, force);
        
        // Schedule next circle
        next = p.millis() + p.random(100);

        // Store mouse values
        previous.x = current.x;
        previous.y = current.y;
    }

    // Draw all paths
    for( let i = 0; i < paths.length; i++) {
        paths[i].update();
        paths[i].display();
    }
    }

    // Start it up
    p.mousePressed=() => {
    next = 0;
    painting = true;
    previous.x = p.mouseX;
    previous.y = p.mouseY;
    paths.push(new Path());
    }

    // Stop
    p.mouseReleased=() => {
    painting = false;
    }

    // A Path is a list of particles
    class Path {
    constructor() {
        this.particles = [];
        this.hue = p.random(100);
    }

    add = (position, force) => {
        // Add a new particle with a position, force, and hue
        this.particles.push(new Particle(position, force, this.hue));
    }
    
    // Display plath
    update= () => {  
        for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
        }
    }  
    
    // Display plath
    display = () => {    
        // Loop through backwards
        for (let i = this.particles.length - 1; i >= 0; i--) {
        // If we shold remove it
        if (this.particles[i].lifespan <= 0) {
            this.particles.splice(i, 1);
        // Otherwise, display it
        } else {
            this.particles[i].display(this.particles[i+1]);
        }
        }
    
    }  
    }

    // Particles along the path
    class Particle {
    constructor(position, force, hue) {
        this.position = p.createVector(position.x, position.y);
        this.velocity = p.createVector(force.x, force.y);
        this.drag = 0.95;
        this.lifespan = 255;
    }

    update = () => {
        // Move it
        this.position.add(this.velocity);
        // Slow it down
        this.velocity.mult(this.drag);
        // Fade it out
        this.lifespan--;
    }

    // Draw particle and connect it with a line
    // Draw a line to another
    display= (other)=> {
        p.stroke(0, this.lifespan);
        p.fill(0, this.lifespan/2);    
        p.ellipse(this.position.x,this.position.y, 8, 8);    
        // If we need to draw a line
        if (other) {
            p.line(this.position.x, this.position.y, other.position.x, other.position.y);
        }
    }
    }
}
