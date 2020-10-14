class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(200,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(300,200);
    car2.addImage("car3",car3_img);
    car4 = createSprite(400,200);
    car2.addImage("car4",car4_img);

    cars = [car1,car2,car3,car4];


  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     //index of the array
     var index=0;
     //x and y position of the cars
     var y=0;
     var x;

      for(var plr in allPlayers){
        //add one to the index for every loop
        index=index+1;
        //position the cars a little away from each other in x direction
        y=y+200;
        //use data from the database to display the cars in y direction
        x=displayHeight-allPlayers[plr].distance;
        //setting the x and y coordinate
        cars[index-1].x=x;
        cars[index-1].y=y;
        //give color to the active car
        if(index===player.index)
        {
          cars[index-1].shapeColor="red";
          camera.position.y=displayWidth/2;
          camera.position.x=cars[index-1].x;
        }

      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }
    drawSprites();

  }
}
