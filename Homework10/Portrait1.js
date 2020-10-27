var eyerightX = 540;
var eyerightY = 420;
var eyerightDirection;

var eyeleftX = 630;
var eyeleftY = 425;
var eyeleftDirection;

var handrightX = 440;
var handrightY = 457;
var handrightDirection;

var mouthleftX1 = 660;
var mouthleftY1 = 500;
var mouthleftX2 = 680;
var mouthleftY2 = 520;
var mouthleftDirection;

var size = 20;
var count = 0
var sizedirection = 1;



function setup() 
{
            createCanvas(900, 900);
             eyerightDirection = Math.floor(Math.random() * 10);
             eyeleftDirection = Math.floor(Math.random() *10);
             handrightDirection = Math.floor(Math.random() *10);
             mouthleftDirection = Math.floor(Math.random() *10);
}

function draw()
        {
            background(180,102,0);
            fill (64,64,64);
            //body//
            rect (180,250, 365, 500);
            //shoulder right//
            triangle(180,250,362.5,210,362.5,250);
            //shoulder left//
            triangle(362.5,250,362.5,210,540,250);
            //arm//
            fill (255,128,0);
            rect(310,210,100,40);
            fill (64,64,64);
            triangle(545,680,545,250,800,440);
            rect(80,250,100,300);
            triangle(80,580,80,450,670,490);
            

            //pumpkin//
            fill (255,128,0);
            circle(600,490,300);
            //eye right//
            fill (0,0,0);
            ellipse(eyerightX,eyerightY,50,60);
            eyerightY += eyerightDirection;
            if (eyerightY <= 380 || eyerightY >= 495)
            {
                eyerightDirection *= -1;
            }
            //eye left//
            fill (0,0,0);
            ellipse(eyeleftX,eyeleftY,51,60);
            eyeleftY += eyeleftDirection;
            if (eyeleftY <= 385 || eyeleftY >= 495)
            {
                eyeleftDirection *= -1;
            }
            //nose//
            fill(0,0,0);
            triangle (555,480,585,420,610,482);
            //mouth//
            line (500,500,520,520);
            line (520,520,540,500);
            line (540,500,560,520);
            line (560,520,580,500);
            line (580,500,600,520);
            line (600,520,620,500);
            line (620,500,640,520);
            line (640,520,660,500);
            line (mouthleftX1,mouthleftY1,mouthleftX2,mouthleftY2);
            mouthleftX1, mouthleftX2 += mouthleftDirection;
            if (mouthleftX1 <= 660 || mouthleftX1>= 700)
            if (mouthleftX2 <= 680 || mouthleftX2>= 730)
            {
                mouthleftDirection *= -1;
            }
            //hand left under head//
            fill (0,0,0);
            ellipse(575,640,110,85);
            circle(515,620,40);
            //hand right//
            ellipse(handrightX,handrightY,60,140);
            handrightX += handrightDirection;
            if (handrightX <= 420 || handrightX >= 460)
            {
                handrightDirection *= -1;
            }
            fill(0,102,0);
            //stem//
            triangle(600,340,620,300,640,350);
            //buttons//
            point (360,550);
            point (360,450);
            point (360,400);
            point (360,350);
            point (360,300);
            point (360,250);
            //name//
            strokeWeight(4);
            textSize(size);
            size += sizedirection;
            count++;
            if (count > 5)
            {
                sizedirection *=-1;
                count = 0;
            }

            fill(0,0,0);

            text('Derik Schrader',650,820);

            

        }