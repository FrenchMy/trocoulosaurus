

let video;
let poseNet;
let pose;
let skeleton;

let brain;
let poseLabel = "";

let state = 'waiting';
let targetLabel;


function keyPressed() {
  if (key == 'e') {
    brain.normalizeData();
    brain.train({ epochs: 150 }, finished);
  } else if (key == 's') {
    brain.saveData();
  } else {
    targetLabel = key;
    console.log(targetLabel);
    setTimeout(function () {
      console.log('collecting');
      state = 'collecting';
      setTimeout(function () {
        console.log('not collecting');
        state = 'waiting';
      }, 5000);
    }, 5000);
  }
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  let options = {
    inputs: 34,
    outputs: 4,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);


  const modelInfo = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin',
  };
  brain.load(modelInfo, brainLoaded);

  // LOAD TRAINING DATA
  //brain.loadData('dino.json', dataReady);


}

function brainLoaded() {
  console.log('pose classification ready!');
  classifyPose();
}

function classifyPose() {
  if (pose) {
    let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }
    brain.classify(inputs, gotResult);
  } else {
    setTimeout(classifyPose, 100);
  }
}

function gotResult(error, results) {
  if (results[0].confidence > 0.75) {
    poseLabel = results[0].label.toUpperCase();
  }
  classifyPose();
}

function dataReady() {
  brain.normalizeData();
  brain.train({
    epochs: 150
  }, finished);
}

function finished() {
  console.log('model trained');
  brain.save();
  classifyPose();
}







function gotPoses(poses) {
  // console.log(poses); 
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
    if (state == 'collecting') {
      let inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        inputs.push(x);
        inputs.push(y);
      }
      let target = [targetLabel];
      brain.addData(inputs, target);
    }
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  push();
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, video.width, video.height);

  if (pose) {
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(0);

      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(255, 0, 0);
      stroke(255, 0, 0);
      ellipse(x, y, 16, 16);
    }
  }
  pop();


  const pterodactyle = document.querySelector(".pterodactyle");
  const brontosaure = document.querySelector(".brontosaure");
  const trex = document.querySelector(".trex");
  const hydrorion = document.querySelector(".hydrorion");
  const pterodactyleText = document.querySelector(".prerodactyle-text");
  const brontosaurusText = document.querySelector(".brontosaurus-text");
  const trexText = document.querySelector(".trex-text");
  const hydrorionText = document.querySelector(".hydrorion-text");
  const loader = document.querySelector(".ring");


  if (poseLabel == "P") {
    if (!pterodactyle.classList.contains('p-visible')) {
      loader.style.display = "block";
    }
  
    setTimeout( () => {
      pterodactyle.classList.add('p-visible');
      pterodactyleText.classList.add('p-visible');
      loader.style.display = "none";
    } 
    , 2000);

  } else {
    pterodactyle.classList.remove('p-visible');
    pterodactyleText.classList.remove('p-visible');
  }

  if (poseLabel == "B") {
    if (!brontosaure.classList.contains('p-visible')) {
      loader.style.display = "block";
    }
    setTimeout( () => {
      brontosaure.classList.add('p-visible');
      brontosaurusText.classList.add('p-visible');
      loader.style.display = "none";
    } 
    , 2000);

  } else {
    brontosaure.classList.remove('p-visible');
    brontosaurusText.classList.remove('p-visible');
  }


  if (poseLabel == "T") {
    if (!trex.classList.contains('p-visible')) {
      loader.style.display = "block";
    }
    setTimeout( () => {
      trex.classList.add('p-visible');
      trexText.classList.add('p-visible');
      loader.style.display = "none";
    } 
    , 2000);

  } else {
    trex.classList.remove('p-visible');
    trexText.classList.remove('p-visible');
  }


  if (poseLabel == "H") {
    if (!hydrorion.classList.contains('p-visible')) {
      loader.style.display = "block";
    }
    setTimeout( () => {
      hydrorion.classList.add('p-visible');
      hydrorionText.classList.add('p-visible');
      loader.style.display = "none";
    } 
    , 2000);

  } else {
      hydrorion.classList.remove('p-visible');
      hydrorionText.classList.remove('p-visible');
  }





}