var rityta = new RoboroCanvas("minCanvas");
var ball= {x:10, y:10, xSpeed: 1, ySpeed:1};

var sikte = {x:300, y:300, xSpeed: 2, ySpeed: 2};
var up = false;

rityta.update = function()
{    
    
    if (mouse.left)
    {
        if (up)
        {
            // Avfyra skottet
            
            up = false;
        }
        else
        {
            up = true;
        }
    }
  
    rityta.clearScreen();
    rityta.circle(sikte.x, sikte.y, 20, "red");
    if (up)
    {
        sikte.y += sikte.ySpeed;
        if (sikte.y > 300  || sikte.y < 0)
        {
            sikte.ySpeed *= -1;
        }
    }
    else
    {
        sikte.x += sikte.xSpeed;
        if (sikte.x > 300 || sikte.x < 0)
        {
            sikte.xSpeed *= -1;
        }
    }
        
/*   rityta.circle(ball.x, ball.y, 50, "red");
 //   ball.x++;
 //   ball.y++;
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
     if (ball.x > rityta.totalWidth || ball.x < 0)
        ball.xSpeed *= -1;
    else if (ball.y > rityta.totalHeight || ball.y < 0)
        ball.ySpeed *= -1;*/
}

function Snowman()
{
    var x = random
 
    this.update = function()
    {
    };
    
}


var myMan = new Snowman();


