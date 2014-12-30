var rityta = new RoboroCanvas("minCanvas");
rityta.updatesPerSecond = 20;
var ball = {x: 0, y:0};

rityta.update = function()
{

    rityta.clearScreen();
    rityta.circle(ball.x, ball.y, 25, "green");
    ball.x++;
    ball.y++;
    if (ball.x > rityta.width)
        ball.x = 0;
    if (ball.y > rityta.height)
        ball.y = 0;

}