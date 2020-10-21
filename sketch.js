var chef, chefImage;
var robot, robotImage;
var gameState = "start"
var robotName, chefName;
var database;

function preload() {
  chefImage = loadImage("Images/Chef 21.16.06.png")
  robotImage = loadImage("Images/RobotProfile.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database()

  chef = createSprite(windowWidth/2 + 100, windowHeight/2, 50, 50);
  chef.addImage(chefImage)
  chef.scale = 2
  
  robot = createSprite(windowWidth/2 - 100, windowHeight/2, 50, 50);
  robot.addImage(robotImage)
  robot.scale = 0.2

  input1 = createInput("Chef Name")
  input1.position(windowWidth/2 + 70, windowHeight/2 + 100)

  input2 = createInput("Robot Name")
  input2.position(windowWidth/2 - 130, windowHeight/2 + 100)
}

function draw() {
  background(230, 156, 103);
  textSize(30)
  text("No idea!", windowWidth/2 - 20, 40)
  if(mousePressedOver(chef)) {
    name = input1.value()
    updateName(name, "Chef");
  }
  if(mousePressedOver(robot)) {
    name = input2.value()
    updateName(name, "Robot");
  }
  drawSprites();
}

function updateName(name, branch) {
    database.ref("Players/"+ branch + "/").set({
      name: name
    })
}