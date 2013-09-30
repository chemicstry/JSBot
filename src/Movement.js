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
        return true;
    };
    
    C.WalkPathEx = function(path, i, callback)
    {
        if (i < path.length) {
            // Walk
            if (!C.WalkTo(path[i]))
                callback(false);
            
            // Wait until we reach point
            C.WalkPathCheck(path, i, callback);
        } else
            callback(true); // Send a positive callback
    }
    
    C.WalkPathCheck = function(path, i, callback)
    {
        // If it's not last point, wait until it appears in minimap range
        if (path[i+1] && JBUtil.Distance2D(C.GetPosition(), path[i+1]) > (MinimapRadius/MinimapScale))
            setTimeout(C.WalkPathCheck, 500, path, i, callback);
        // If it's last point, wait until we reach it
        else if ((i == path.length-1) && (JBUtil.Distance2D(C.GetPosition(), path[i]) > 2))
            setTimeout(C.WalkPathCheck, 500, path, i, callback);
        // We waited long enough, now walk!
        else
            C.WalkPathEx(path, i+1, callback);
    }
    
    // Walks a path (JBPos array)
    C.WalkPath = function(path, callback)
    {
        var curpos = C.GetPosition();
        
        // Find furthest point on minimap
        var furthest = -1;
        for (var i = path.length-1; i >= 0; --i)
        {
            console.log(JBUtil.Distance2D(curpos, path[i]));
            if (JBUtil.Distance2D(curpos, path[i]) < (MinimapRadius/MinimapScale)) {
                furthest = i;
                break;
            }
        }
        
        if (furthest == -1)
            callback(false);
        
        C.WalkPathEx(path, furthest, callback);
    };
    
    return C;
} ();
