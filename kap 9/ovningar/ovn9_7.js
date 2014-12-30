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
};

var skrivruta = new RoboroCanvas("underskrift");

skrivruta.updatesPerSecond = 800;

skrivruta.update = function()
{
    with (skrivruta)
    {
        if (mouse.left)
        {
            circle(mouse.x, mouse.y, 3, "black");
        }
    }
};

function skicka()
{
   // Inte klart hur man sparar image eller skickar den till lokal server 
}

