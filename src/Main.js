//Include documents from js lib

#include Util.js
#include Mouse.js
#include Movement.js
#include WorldObject.js


//Variables for Main.js 
var JSBot = function() {
    var C = {};
    var GameClient;
    var GameCanvasContainer;
    var BotEnabled = false;
   
   //Enable Bot Function
    C.Enable = function()
    {
        BotEnabled = true;
    };
    //Disable Bot Function
    C.Disable = function()
    {
        BotEnabled = false;
    };
    //Lobby Loaded? Function
    C.GameReady = function()
    {
        var Z = GameClient._cnt._ldp();
        return Z._jw();
    };
    //Load Runescape
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
    //Grab hooks from container within a specified Canvas
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
