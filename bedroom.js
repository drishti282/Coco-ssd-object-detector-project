img = "";
status = "";
objects = [];

function setup() {
  c = createCanvas(380, 400);
  c.position(450, 165);
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function preload() {
  img = loadImage("bedroom.jpg");
}

function modelLoaded() {
  console.log("Model is Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function draw() {
  image(img, 0, 0, 380, 400);
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
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}

function modelLoaded() {
  console.log("Model is Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    objects = results;
  }
}
function back_btn() {
  window.location = "index.html";
}
