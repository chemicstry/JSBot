/*
Movement.js
Movement Class

Functions:

// Returns player position
JBPos GetPosition();

// Converts world grid position to onscreen minimap location
{x, y} WorldPosToMinimap(JBPos pos);

// Goes to specified point on grid
WalkTo(JBPos pos);
*/

function JBPos(x, y, layer)
{
    this.layer = JBUtil.DefArg(layer, 0);
    this.x = x;
    this.y = y;
}

var JBMovement = function()
{
    var C = {};
    
    C.GetPosition = function() {
        return JBPlayer.GetPosition();
    };
    
    C.WorldPosToMinimap = function(dst)
    {
        var src = this.GetPosition();
        var x = (dst.x - src.x)*4 + 1566;
        var y = (src.y - dst.y)*4 + 127;
        return {"x": x, "y": y};
    };
    
    C.WalkTo = function(dst)
    {
        var mm = this.WorldPosToMinimap(dst);
        JBMouse.Move(mm.x, mm.y);
        JBMouse.Click(0);
    };
    
    C.WalkPath = function(path)
    {
        var curpos = GetPosition();
        
        // Find nearest point
        var shortest = 0;
        for (var i = 1; i < path.length; ++i)
        {
            if (JBUtil.Distance(curpos, path[i]) < JBUtil.Distance(curpos, path[shortest]))
                shortest = i;
        }
    };
    
    return C;
} ();
