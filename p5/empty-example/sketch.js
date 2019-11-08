var posX;

function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
    background(200,200,200);
    fill(0);
    ellipse(200,200,100,100);
    fill(255);
    ellipse(posX,200,20,20);
    //left pupil
    if (mouseX>250){
        posX=250;
    }else if (mouseX<150){
        posX=150;
    }else{
        posX=mouseX;
    }
}

