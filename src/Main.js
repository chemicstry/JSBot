#include Util.js
#include Mouse.js
#include Movement.js
#include WorldObject.js

var JSBot = function() {
    var C = {};
    var GameClient;
    var GameCanvasContainer;
    var BotEnabled = false;
   
    C.Enable = function()
    {
        BotEnabled = true;
    };
    
    C.Disable = function()
    {
        BotEnabled = false;
    };
    
    C.GameReady = function()
    {
        var Z = GameClient._cnt._ldp();
        return Z._jw();
    };
    
    C.LoadGame = function()
    {
        var something = GameClient._cke();
        if (something !== undefined) {
            var Player = something._iex();
            if (Player !== undefined) {
                JBPlayer = new JBWorldObject(Player);
            }
        }
    };
    
    Hook = function()
    {
        GameClient = ge;
        GameCanvasContainer = document.getElementById("canvasContainer");
        
        JBMouse.HookEvents(GameCanvasContainer);
        
        C.Disable();
    };
    
    Hook();
    return C;
} ();