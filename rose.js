img = "";
status = "";
objects = [];

function preload() {
  img = loadImage("rose.jpg");
}

function setup() {
  c = createCanvas(300, 380);
  c.position(485, 165);
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {
  image(img, 0, 0, 300, 380);
  if (status != "") {
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Object Detected";
      fill("#FF0000");
      percent = floor(objects[i].confidence * 100);
      text(
        objects[i].label + " " + percent + "%",
        objects[i].x-230,
        objects[i].y-200 
      );
      noFill();
      stroke("#FF0000");
      rect(objects[i].x-230, objects[i].y-200, objects[i].width, objects[i].height);
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
  }
  console.log(results);
  objects = results
}
function back_btn() {
  window.location = "index.html";
}
