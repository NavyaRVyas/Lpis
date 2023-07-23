noseX=0;
noseY=0;
function preload()
{
lipstick=loadImage("https://i.postimg.cc/mDXW94m8/Lips-animated-removebg-preview.png");
}
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("Model is Loaded");
}
function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX=results[0].pose.nose.x -15;
    noseY=results[0].pose.nose.y +5;
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
}
}
function draw()
{
    image(video,0,0,300,300);
    image(lipstick, noseX, noseY, 45, 30);
}