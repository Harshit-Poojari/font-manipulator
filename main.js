
function preload(){}
function setup() {
    video = createCapture(VIDEO);
    video.size(500,550);
    canvas = createCanvas(450,450); 
    canvas.position(560,100);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#42f5b0');
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function gotPoses(results) {
    if(results.length> 0) {
    console.log(results);
}
}