var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var car1,car2,car3,car4;
var cars;

var form, player, game;
var  car1_img, car2_img, car3_img, car4_img;

function preload(){
  car2_img = loadImage("../imags/a1.png");
  car3_img = loadImage("../imags/a2.png");
  car4_img = loadImage("../imags/a3.png");
 
}


function setup(){
  canvas = createCanvas(displayWidth-40,displayHeight-160);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
