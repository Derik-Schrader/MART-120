//Player1//
var characterX = 500;
var characterY = 100;
//key codes//
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// shape1//
var shapeX = 150;
var shapeY = 175;
var shapeXSpeed;
var shapeYSpeed;
//shape2//
var shapeX1 =300
var shapeY1 = 100
var shapeX1Speed;
var shapeY1Speed;

//mouse shape//
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(800, 800);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
}

function draw()
{
    background(0,0,0);
   

    ///call createborder///
  createBorder();

    ///call exit///
   createExit();

   ///call createplayer1///
   createPlayer1();
    
   ///call shape 1 ///
    createShape1();

    ///call shape 1 move///
    createShape1move();
    
    ///call shape 2 ///
    createShape2();

    ///call shape 2 move///
    createShape2Move();

    //call win//
    win();
    
 //call Shape3 mouse click//
   fill(102,0,204);
   circle(mouseShapeX, mouseShapeY, 82);
   }

   ///funtion win///
   function win()
   {
    if(characterX > width && characterY > width)
    {
        fill(255,255,255);
        stroke (5);
       textSize(30);
       text("You Win!", width/2-50, height/2-50)
       }
   }

   ///function mouse click///
   function mouseClicked() 
   {
      mouseShapeX=mouseX;
      mouseShapeY=mouseY;
   }

    ///function create border///
   function createBorder()
   {
    fill(255, 255, 0);
    //border top
    rect(0,0,width,20);
    //L border
    rect(0,0,10,height);
    //border bottom//exit
    rect(80, height-20,width, 20);
    // R border
    rect(width-10,0,10,height);
   }


   ///function create exit///
   function createExit()
   {
    textSize(22);
    text("Exit To Win", width - 775,height-70)
   }


   ///function create player1///
   function createPlayer1()
   {
 fill(23,40,123);
 circle(characterX,characterY,25);
 if(keyIsDown(w))
 {
     characterY -= 10;   
 }
 if(keyIsDown(s))
 {
     characterY += 10;   
 }
 if(keyIsDown(a))
 {
     characterX -= 10;   
 }
 if(keyIsDown(d))
 {
     characterX += 10;   
}
   }

   ///function create shape1///
function createShape1()
{
    fill(255,128,0);
    circle(shapeX1, shapeY1, 82);
}

    ///function create shape1 move///
function createShape1move()
{
    shapeX1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 5);
    shapeY1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 3);
    shapeX1 += shapeX1Speed;
    shapeY1 += shapeY1Speed;
    if(shapeX1 > width)
    {
        shapeX1 = 0;
    }
    if(shapeX1 < 0)
    {
        shapeX1 = width;
    }
    if(shapeY1 > height)
    {
        shapeY1 = 0;
    }
    if(shapeY1 < 0)
    {
        shapeY1 = height;
    }
}

///function create shape2///
function createShape2()
{
    fill(13,145,14);
    square(shapeX, shapeY, 75);
}

///function create shape2 movement///
function createShape2Move()
{    
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 3);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 3);
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 25;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 25;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 25;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 25;
    }
   
}

  