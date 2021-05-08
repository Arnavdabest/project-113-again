function preload(){}
function setup(){
    canvas = createCanvas(400, 600);
    video = createCapture(VIDEO);
    video.hide()
}
function draw(){
    ellipse(40, 250, 55, 55);
    rect(150, 10, 55, 55);
    rect(330, 220, 55, 55, 20);
    rect(150, 540, 55, 55, 20, 15, 10, 5,);
    fill(255, 0, 0); 
}

function take_snapshot(){
    save("myimage.png")
}