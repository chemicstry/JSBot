/*
Util.js
Helper Functions
*/

var JBUtil = {
    RandomInt: function(from, to)
    {
        return Math.floor(Math.random()*(to-from+1)+from);
    },
    
    DefArg: function(val, defval) {
        if (typeof(val) === undefined)
            return defval;
        else
            return val;
    },
    
    // For debugging only!
    Sleep: function(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    },
    
    Distance2D: function(pos1, pos2)
    {
        return Math.sqrt(Math.pow(pos1.x-pos2.x, 2) + Math.pow(pos1.y-pos2.y, 2));
    },
};
