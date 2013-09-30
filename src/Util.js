/*
Util.js
Helper Functions
*/

var JBUtil = {
    RandomInt: function(from, to)
    {
        return Math.floor(Math.random()*(to-from+1)+from);
    },

    SleepMS: function(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    },
    
    DefArg: function(val, defval) {
        if (typeof(val) === undefined)
            return defval;
        else
            return val;
    },
    
    Distance2D: function(pos1, pos2)
    {
        return Math.sqrt(Math.Pow(pos1.x-pos2.x, 2) + Math.Pow(pos1.y-pos2.y, 2));
    },
};
