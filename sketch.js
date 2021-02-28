var dog, database, x, position, foodStock, dogImg, dogImg1, foodS;
var dFood;

function preload()
{
	dogImg=loadImage("Images/Dog.png");
  dogImg1=loadImage("Images/happy dog.png");
}

function setup() {

  database = firebase.database();

	createCanvas(800, 750);
  dog=createSprite(400,400,50,50);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dFood= new dogFood();


  
}

function readStock(data){

  foodS=data.val();

}

function draw() {  

  background(46,139,87);

  dFood.display();

  drawSprites();
  

}



