// var positions = [];
// var speed = [];
// var colours = []; 
// var numberOfCircles = 25;

// function setup(){
//     createCanvas(windowWidth, windowHeight);

    
//     for (var i=0; i<numberOfCircles; i++){
//         colours[i]= color(random(255), random(255), random(255), 150);
//         positions[i] = random(windowHeight);
//         speed[i] = (1, 3);
//     }

//     noStroke();
//     ellipseMode(CENTER);
//     textSize(20);
// }

// function draw(){
//     background(255, 255, 255);
//     var interval = windowWidth / numberOfCircles;

//     for(var i=0; i<numberOfCircles; i++){
//         fill(colours[i]);
//         circle(i * interval, positions[i], 70);

//     }

//     for(var i=0; i<numberOfCircles; i++){
//         positions[i] -= speed[i];
//         if(positions[i] < -20){
//             positions[i] = height + 20;
//         }
//     }

// }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//   }


var bubbles = [];
 
function createBubbles(x, y){
    
    for(var i=0; i<1; i++){
        var bubble = {
            x: x, 
            y: y, 
            r: random(20, 80), 
            speed: random(1, 3),
            // alpha: 150, 
            colour: color(random(255), random(255), random(255), 150),
            
            draw: function(){
                noStroke();
                circle(this.x, this.y, this.r * 2);
                fill(this.colour)
                this.update();
            }, 
            update: function(){
                this.y -= this.speed;
            }, 
        };
        bubbles.push(bubble);
    }

    
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    createBubbles(random(width), height - random(1, 100));
    // bubble.mousePressed(opacity);
}

function draw(){
    background(255);

    for (var i=0; i< bubbles.length; i++){
        bubbles[i].draw();
    }

    if (frameCount % 60 === 0) {
        createBubbles(random(width), height - random(1, 100));
    }
}

// function opacity(){
//     let opacity = color(random(255), random(255), random(255), 0);
// }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

