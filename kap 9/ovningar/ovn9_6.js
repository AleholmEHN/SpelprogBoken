var rityta = new RoboroCanvas("minCanvas");

with(rityta)
{
    var col = mixColor(random(256), random(256), random(256));
    text(10,80,30,"Cyberdyne", col);
    text(10,120,30,"Systems AB", col);
}

var back = new RoboroCanvas("myBackground");

var w = window.innerWidth;
var h = window.innerHeight;

back.width = w;
back.height = h;

with (back)
{
    fill("black");
    for (var yPos = 0; yPos < h; yPos += 100)
    {
        line(0,yPos, w, yPos,4, "red");
    }
    for (var xPos = 0; xPos < w; xPos += 100)
    {
        line(xPos,0, xPos, h,4, "red");
    }

}

var vinkel = 0;

rityta.update = function()
{
    with(rityta)
    {
        fill("white");
        save();
        translate(150, 100);
        rotate(vinkel);
        var col = mixColor(random(256), random(256), random(256));
        text(0,0,20,"Cyberdyne", col);
        text(0,20,20,"Systems AB", col);
        vinkel += 5;
        restore();
    }    
}

var radar = new RoboroCanvas("radar");
var radarvinkel = 0;
radar.updatesPerSecond = 10;

radar.update = function()
{
    with(radar)
    {
        fill("black");
        save();
        translate(100, 100);
        circle(0, 0, 80, "green");
        circle(0, 0, 77, "black");
        circle(0, 0, 50, "green");
        circle(0, 0, 47, "black");
        circle(0, 0, 20, "green");
        circle(0, 0, 17, "black");
        line(-100, 0, 100, 0, 2, "green");
        line(0, -100, 0, 100, 2, "green");
        rotate(radarvinkel);
        line(0, 100, 0, 0, 2, "green");
        radarvinkel -= 10;
        restore();
        var traff = random(5);
        if (traff == 3)     // Är det dags för träff?
        {
            var antalTraffar = random(5);   // Hur många träffar?
            for (var i = 0; i < antalTraffar; i++)
            {
                var xpos = random(200);
                var ypos = random(200);
                rectangle(xpos, ypos, 5, 5, "green");
            }
        }
        

    }
};

