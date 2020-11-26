//Create variables here

var dog, happyDog, database, foodS, foodStock,dogImage1;

function preload()
{
  //load images here
  happyDog=loadImage("Dog.png");
  dogImage1=loadImage("happydog.png");
  
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(210,240,30,60);
  dog.addImage(dogImage1);
  dog.scale(0.3);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  
  //add styles here
  if(keyWentDown(UP_ARROW)) {
    writeStocks(foodS);
    dog.addImage("happyDog")
    dog.scale(0.3);
  }
  drawSprites();
  textSize(9);
  text("Milk Bottles = "+foodStock,210,180);
}

function readStock(data) {
  foodS=data.val();
}

function writeStocks(x) {
  database.ref('/').update({
    Food:x
  })
}