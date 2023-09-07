function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,350);
    canvas.position(560,140);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet initialized");
}
function draw()
    {
     background("grey");
    }
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}