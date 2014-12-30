var rityta = new RoboroCanvas("minCanvas");



rityta.update = function()
{
    
    with (rityta)
    {

        if (mouse.left)
            circle(mouse.x, mouse.y, 50, "red");
        if (mouse.right)
            circle(mouse.x, mouse.y, 50, "white");
    }
}