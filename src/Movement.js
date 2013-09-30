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
    
    // Minimap constants
    var MinimapScale = 4;
    var MinimapRadius = 84;
    
    // Return player position
    C.GetPosition = function() {
        return JBPlayer.GetPosition();
    };
    
    // Converts world grid position to minimap location
    C.WorldPosToMinimap = function(dst)
    {
        var src = this.GetPosition();
        var x = (dst.x - src.x)*MinimapScale + 1566;
        var y = (src.y - dst.y)*MinimapScale + 127;
        return {"x": x, "y": y};
    };
    
    // Walks to a specified point on map
    C.WalkTo = function(dst)
    {
        var mm = this.WorldPosToMinimap(dst);
        JBMouse.Move(mm.x, mm.y);
        JBMouse.Click(0);
    };
    
    // Walks a path (JBPos array)
    C.WalkPath = function(path)
    {
        var curpos = GetPosition();
        
        // Find furthest point on minimap
        var furthest = -1;
        for (var i = path.length-1; i >= 0; --i)
        {
            if (JBUtil.Distance2D(curpos, path[i]) < (MinimapRadius/MinimapScale)) {
                furthest = i;
                break;
            }
        }
        
        // Walkie
        for (var i = furthest; i < path.length; ++i)
        {
            if (!WalkTo(path[i]))
                return false;
            
            if (i < path.length-1) {
                while (JBUtil.Distance2D(GetPosition(), path[i+1]) > (MinimapRadius/MinimapScale))
                    JBUtil.Sleep(500);
            }
        }
        
        // Wait until we reach last point
        while (JBUtil.Distance2D(GetPosition(), path[path.length-1]) > 2)
            JBUtil.Sleep(500);
    };
    
    return C;
} ();
