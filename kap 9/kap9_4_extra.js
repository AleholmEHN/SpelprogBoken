var rityta = new RoboroCanvas("minCanvas");
rityta.updatesPerSecond = 30;
var rityta2 = new RoboroCanvas("minCanvas2");
rityta2.updatesPerSecond = 60;
var ball = {x: 0, y:0};
var ball2 = {x: 0, y:0};

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

rityta2.update = function()
{

    rityta2.clearScreen();
    rityta2.circle(ball2.x, ball2.y, 25, "blue");
    ball2.x++;
    ball2.y++;
    if (ball2.x > rityta2.width)
        ball2.x = 0;
    if (ball2.y > rityta2.height)
        ball2.y = 0;

}