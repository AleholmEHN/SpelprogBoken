
var canvas1 = new RoboroCanvas("canvas1");
var canvas2 = new RoboroCanvas("canvas2");
var canvas3 = new RoboroCanvas("canvas3");

canvas1.rectangle(10, 20, 400, 250, "blue");
canvas1.circle(20, 50, 150, "yellow");
canvas1.circle(200, 150, 70, "red");
canvas1.triangle(100, 20, 180, 100, 60, 80, "green");
canvas1.ring(400, 200, 100, 10, "gray");
canvas1.line(100, 350, 750, 100, 10, "pink");

canvas2.fill("orange");
for (var y = 0 ; y <= canvas3.height; y += 5)
{
    canvas3.line(0,0,canvas3.width, y, 1, "black");
    canvas3.line(canvas3.width, canvas3.height, 0, y, 1, "black");
}
