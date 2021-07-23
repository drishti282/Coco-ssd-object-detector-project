img = "";
status = "";
objects = [];

function preload() {
  img = loadImage("dog.jpg");
}

function setup() {
  c = createCanvas(470, 350);
  c.position(410, 180);
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {
  image(img, 0, 0, 470, 350);
  if (status != "") {
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Object Detected";
      fill("#FF0000");
      percent = floor(objects[i].confidence * 100);
      text(
        objects[i].label + " " + percent + "%",
        objects[i].x ,
        objects[i].y 
      );
      noFill();
      stroke("#FF0000");
      rect(objects[i].x-200, objects[i].y-200, objects[i].width-400, objects[i].height-400);
    }
  }
}

function modelLoaded() {
  console.log("modelLoaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
  }
}
function back_btn() {
  window.location = "index.html";
}
