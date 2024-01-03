var canvas;
var video;
var song;

var leftWristx=0;
var leftWristy=0;

var rightWristx=0;
var rightWristy=0;

function preload () {
song=loadSound("music.mp3");
}

function setup () {
canvas= createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

var poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotRoses);
}

function gotRoses(resultsrsr) {
if (resultsrsr.length > 0);{
    console.log(resultsrsr);
    leftWristx=resultsrsr[0].pose.leftWrist.x;
    leftWristy=resultsrsr[0].pose.leftWrist.y;
    rightWristx=resultsrsr[0].pose.rightWrist.x;
    rightWristy=resultsrsr[0].pose.rightWrist.y;

    console.log("LeftWristX = " + leftWristx + "LeftWristY = " + leftWristy);
    console.log("RightWristX = " + rightWristx + "RightWristY = " + rightWristy);
}
}

function modelLoaded() {
    console.log("--Pose Net Is Active--");
}

function draw () {
image (video, 0,0,600,500);
}

function play () {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop() {
    song.stop();
}