var Menu , play, instrution, backmenu ;
var gameState = "start";

function preload(){
  background1 = loadImage("Images/background1.jpg")

  MenuImg  = loadImage("Images/Menu.png")
  PlayImg  = loadImage("Images/play.png")
  InstrutionImg  = loadImage("Images/instrutions.png")

  backimg = loadImage("Images/BACK.png")

  //fruit
  appleimg = loadImage("Images/apple.png")
  mangoimg = loadImage("Images/mango.png")
  guavaimg = loadImage("Images/guava.png")
  orangeimg = loadImage("Images/orange.png")

  //fruitsquare
  applesquImg =loadImage("Images/square.png")
  mangosquImg =loadImage("Images/square.png")
  guavasquImg =loadImage("Images/square.png")
  orangesquImg =loadImage("Images/square.png")

  //snake
  redsnakeimg = loadImage("Images/Rsnake.png")
  bluesnakeimg = loadImage("Images/snake (1).png")
  greensnakeimg = loadImage("Images/Gsnake.png")
  yellowsnakeimg = loadImage("Images/ysnake.png")

  //snake
  redsnakerectImg = loadImage("Images/rectangle.png")
  bluesnakerectImg = loadImage("Images/rectangle.png")
  greensnakerectImg = loadImage("Images/rectangle.png")
  yellowsnakerectImg = loadImage("Images/rectangle.png")


  //type of game
  oneplayerimg = loadImage("Images/ONE PLAYER.png")
  twoplayerimg = loadImage("Images/Two Player.png")
  computerimg = loadImage("Images/Computer.png")
  onlineimg = loadImage("Images/Online.png")
  playerVScomputerimg = loadImage("Images/Player vs computer.png")
  playerVScomputerOnlineimg = loadImage("Images/Player vs computer online.png")

  //level
  veryeasyimg =loadImage("Images/veryeasy.png")
  easyimg =loadImage("Images/easy.png")
  normalimg =loadImage("Images/normal.png")
  hardimg =loadImage("Images/hard.png")
  veryhardimg =loadImage("Images/veryhard.png")  
}
function setup() {
  createCanvas(900,700);
  
  Menu =createSprite(450, 240, 50, 50);
  Menu.addImage  (MenuImg)
  Menu.visible = false;
  
  play =createSprite(450, 380, 50, 50);
  play.addImage  (PlayImg)
  play.visible = false;
  
  instrution =createSprite(450, 520, 50, 50);
  instrution.addImage (InstrutionImg)
  instrution.visible = false;
  
  //back button
  backmenu =createSprite(70, 50, 50, 50);
  backmenu.addImage  (backimg)
  backmenu.visible = false;

  backplay =createSprite(450, 50, 50, 50);
  backplay.addImage  (backimg)
  backplay.visible = false;

  backoneplayer1 =createSprite(70, 50, 50, 50);
  backoneplayer1.addImage  (backimg)
  backoneplayer1.visible = false;

  backoneplayer2 =createSprite(190, 50, 50, 50);
  backoneplayer2.addImage  (backimg)
  backoneplayer2.visible = false;

  //fruit
  apple =createSprite(100, 240, 50, 50);
  apple.addImage  (appleimg)
  apple.scale = 0.5
  apple.visible = false;
  
  mango =createSprite(300, 240, 50, 50);
  mango.addImage  (mangoimg)
  mango.scale = 0.4
  mango.visible = false;
  
  guava =createSprite(540, 240, 50, 50);
  guava.addImage (guavaimg)
  guava.scale = 0.2
  guava.visible = false;

  orange =createSprite(800, 240, 50, 50);
  orange.addImage (orangeimg)
  orange.scale = 0.4
  orange.visible = false;

  //fruit Square
  applesqu =createSprite(100, 240, 50, 50);
  applesqu.addImage  (applesquImg)
  applesqu.scale = 1.5
  applesqu.visible = false;
  
  mangosqu =createSprite(300, 240, 50, 50);
  mangosqu.addImage  (mangosquImg)
  mangosqu.scale = 1.5
  mangosqu.visible = false;
  
  guavasqu =createSprite(540, 240, 50, 50);
  guavasqu.addImage (guavasquImg)
  guavasqu.scale = 1.5
  guavasqu.visible = false;

  orangesqu =createSprite(800, 240, 50, 50);
  orangesqu.addImage (orangesquImg)
  orangesqu.scale = 1.5
  orangesqu.visible = false;

   fruit=createSprite(200,200,50,50)

  //snake
  redsnk =createSprite(100, 520, 50, 50);
  redsnk.addImage  (redsnakeimg)
  redsnk.scale = 0.5
  redsnk.visible = false;
  
  bluesnk =createSprite(300, 520, 50, 50);
  bluesnk.addImage  (bluesnakeimg)
  bluesnk.scale = 1.6
  bluesnk.visible = false;
  
  greensnk =createSprite(540, 520, 50, 50);
  greensnk.addImage (greensnakeimg)
  greensnk.scale = 1.6
  greensnk.visible = false;

  yellowsnk=createSprite(800, 520, 50, 50);
  yellowsnk.addImage (yellowsnakeimg)
  yellowsnk.scale = 1.6
  yellowsnk.visible = false;

  //snake rectangle
  redsnkrect =createSprite(100, 520, 50, 50);
  redsnkrect.addImage  (redsnakerectImg)
  redsnkrect.scale = 0.5
  redsnkrect.visible = false;
  
  bluesnkrect =createSprite(300, 520, 50, 50);
  bluesnkrect.addImage  (bluesnakerectImg)
  bluesnkrect.scale = 0.5
  bluesnkrect.visible = false;
  
  greensnkrect =createSprite(540, 520, 50, 50);
  greensnkrect.addImage (greensnakerectImg)
  greensnkrect.scale = 0.5
  greensnkrect.visible = false;

  yellowsnkrect=createSprite(800, 520, 50, 50);
  yellowsnkrect.addImage (yellowsnakerectImg)
  yellowsnkrect.scale = 0.5
  yellowsnkrect.visible = false;

  snake=createSprite(200,200,50,50)

  //type of games 
  oneplayer = createSprite(240,180,50,50)
  oneplayer.addImage  (oneplayerimg)
  oneplayer.visible = false;

  twoplayer = createSprite(660,180,50,50)
  twoplayer.addImage  (twoplayerimg)
  twoplayer.visible = false;

  computer = createSprite(240,350,50,50)
  computer.addImage  (computerimg)
  computer.visible = false;

  online = createSprite(660,350,50,50)
  online.addImage  (onlineimg)
  online.visible = false;

  playerVScomputer = createSprite(240,530,50,50)
  playerVScomputer.addImage  (playerVScomputerimg)
  playerVScomputer.visible = false;

  playerVScomputerOnline = createSprite(700,530,50,50)
  playerVScomputerOnline.addImage  (playerVScomputerOnlineimg)
  playerVScomputerOnline.visible = false;
  
  //oneplayer level
  veryeasy = createSprite(450,100,50,50)
  veryeasy.addImage(veryeasyimg)
  veryeasy.visible=false

  easy = createSprite(450,220,50,50)
  easy.addImage(easyimg)
  veryeasy.visible=false

  normal = createSprite(450,350,50,50)
  normal.addImage(normalimg)
  normal.visible=false

  hard = createSprite(450,490,50,50)
  hard.addImage(hardimg)
  hard.visible=false

  veryhard = createSprite(450,630,50,50)
  veryhard.addImage(veryhardimg)
  veryhard.visible=false

}

function draw() {
  background(background1);  
  console.log("gameState  " + gameState)
  if(gameState =="start"){

    console.log("gameState start")
    Menu.visible = true;
    play.visible = true;
    instrution.visible = true;

    //back button
    backmenu.visible = false;
    backplay.visible = false;
    backoneplayer1.visible = false;

    //fruit
    apple.visible = false;
    mango.visible = false;
    guava.visible = false;
    orange.visible = false;
    fruit.visible = false;

    //fruit square
    applesqu.visible = false;
    mangosqu.visible = false;
    guavasqu.visible = false;
    orangesqu.visible = false;

    //snake
    redsnk.visible = false;
    bluesnk.visible = false;
    greensnk.visible = false;
    yellowsnk.visible = false;
    snake.visible = false;

    //snake rectangle
    redsnkrect.visible = false;
    bluesnkrect.visible = false;
    greensnkrect.visible = false;
    yellowsnkrect.visible = false;

    //type of game
    oneplayer.visible = false
    twoplayer.visible = false
    computer.visible = false
    online.visible = false
    playerVScomputer.visible = false
    playerVScomputerOnline.visible = false

    //one player level
    veryeasy.visible = false
    easy.visible = false
    normal.visible = false
    hard.visible = false
    veryhard.visible = false

    if(mousePressedOver(Menu)){
      gameState = "menu";
      
    }
    if(mousePressedOver(play)){
      gameState = "play";
      
    }
    textSize(40)
     fill(60, 103, 73)
     textStyle(BOLD)
     text("Snake Game",330,130)
  }
  //menu
  if(gameState == "menu"){
    Menu.visible = false;
    play.visible = false;
    instrution.visible = false;

    //fruit
    apple.visible = true;
    mango.visible = true;
    guava.visible = true;
    orange.visible = true;

    //snake
    redsnk.visible = true;
    bluesnk.visible = true;
    greensnk.visible = true;
    yellowsnk.visible = true;

    backmenu.visible = true;
    fruit.visible = false;
    snake.visible = false;
    textSize(35)
    fill(34,58,42)
    textStyle(BOLD)
    text("Choose your favourite fruit",250,130)

    textSize(35)
    fill(34,58,42)
    textStyle(BOLD)
    text("Choose your favourite snake",250,400)

    //fruit
    if(mousePressedOver(apple)){
      fruit.addImage(appleimg);
      applesqu.visible = true;
      mangosqu.visible = false;
      guavasqu.visible = false;
      orangesqu.visible = false;
    }
    if(mousePressedOver(orange)){
      fruit.addImage(orangeimg);
      applesqu.visible = false;
      mangosqu.visible = false;
      guavasqu.visible = false;
      orangesqu.visible = true;
    }
    if(mousePressedOver(mango)){
      fruit.addImage(mangoimg);
      applesqu.visible = false;
      mangosqu.visible = true;
      guavasqu.visible = false;
      orangesqu.visible = false;
    }
    if(mousePressedOver(guava)){
      fruit.addImage(guavaimg);
      applesqu.visible = false;
      mangosqu.visible = false;
      guavasqu.visible = true;
      orangesqu.visible = false;
    }

    //snake
    if(mousePressedOver(redsnk)){
      snake.addImage(redsnakeimg);
      redsnkrect.visible = true;
      bluesnkrect.visible = false;
      greensnkrect.visible = false;
      yellowsnkrect.visible = false;
    }
    if(mousePressedOver(bluesnk)){
      snake.addImage(bluesnakeimg);
      redsnkrect.visible = false;
      bluesnkrect.visible = true;
      greensnkrect.visible = false;
      yellowsnkrect.visible = false;
    }
    if(mousePressedOver(greensnk)){
      snake.addImage(greensnakeimg);
      redsnkrect.visible = false;
      bluesnkrect.visible = false;
      greensnkrect.visible = true;
      yellowsnkrect.visible = false;
    }
    if(mousePressedOver(yellowsnk)){
      snake.addImage(yellowsnakeimg);
      redsnkrect.visible = false;
      bluesnkrect.visible = false;
      greensnkrect.visible = false;
      yellowsnkrect.visible = true;
    }


    if(mousePressedOver(backmenu)){
      gameState ="start"
    }
  }

  //play
  if(gameState == "play"){

    console.log("Gamestate play");
    backplay.visible =true
    backoneplayer1.visible =false


    //type of game
    oneplayer.visible = true
    twoplayer.visible = true
    computer.visible = true
    online.visible = true
    playerVScomputer.visible = true
    playerVScomputerOnline.visible = true

    Menu.visible = false;
    play.visible = false;
    instrution.visible = false;

    veryeasy.visible=false
    easy.visible=false
    normal.visible=false
    hard.visible=false
    veryhard.visible=false
    
    if(mousePressedOver(backplay)){
      gameState ="start"
    }

    if(mousePressedOver(oneplayer)){
      gameState="levels"
    }
  }

  if(gameState == "levels"){
   backoneplayer1.visible =true
   backplay.visible =false
   backmenu.visible =false

   //one player level
   veryeasy.visible=true
   easy.visible=true
   normal.visible=true
   hard.visible=true
   veryhard.visible=true

   //type of game
   oneplayer.visible = false
   twoplayer.visible = false
   computer.visible = false
   online.visible = false
   playerVScomputer.visible = false
   playerVScomputerOnline.visible = false

   if(mousePressedOver(backoneplayer1)){
        gameState="play"
     }
   
     if(mousePressedOver(easy)){
       gameState = "easy"
     }
  }
  if(gameState == "easy"){
    background("blue");
   
  }

  drawSprites();

}  