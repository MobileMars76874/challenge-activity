left_wrist_x = 0;
right_wrist_x = 0;
Wrist_d = 0;
Nose_x = 0;
Nose_y = 0;
left_eye_x = 0;
right_eye_x = 0;
eye_d = 0;
check = null;

function preload(){
}

function setup(){
canvas = createCanvas(400, 400);
canvas.position(560, 150);
Video = createCapture(VIDEO);
Video.hide();

poseNet = ml5.poseNet(Video, model_loaded);
poseNet.on("pose", gopose);
}

function model_loaded(){
console.log("Model Loaded!");
}

function draw(){
if(check = "square"){
square(Nose_x, Nose_y, Wrist_d);
}
else if(check = "triangle"){
triangle(150, 150, eye_d);
}
}


function gopose( results){
if(results.length > 0){
console.log(results);



left_wrist_x = results[0].pose.leftwrist.x;
right_wrist_x = results[0].pose.rightwrist.x;

Wrist_d = floor(left_wrist_x - right_wrist_x);

Nose_x = results[0].pose.nose.x;
Nose_y = results[0].pose.nose.y;

left_eye_x = results[0].pose.lefteye.x;
right_eye_x = results[0].pose.righteye.x;

eye_d = floor(left_eye_x - right_eye_x);
}
}

function s(){
check = "square";
}

function t(){
check = "triangle";
}
