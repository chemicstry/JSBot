//Include documents from js lib

#include Util.js
#include Mouse.js
#include Keyboard.js
#include Movement.js
#include WorldObject.js
#include ScriptWorker.js
#include GUI.js


//Variables for Main.js 
var JSBot = function() {
    var C = {};
    var GameClient;
    var GameCanvasContainer;
    var BotEnabled = false;
    
    C.Version = 0.1;
   
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
    C.Hook = function()
    {
        GameClient = ge;
        GameCanvasContainer = document.getElementById("canvasContainer");
        
        JBMouse.HookEvents(GameCanvasContainer);
        JBKeyboard.Hook(document);
        
        C.Disable();
    };
    
    
    return C;
} ();

$(document).ready(function() {
    console.log("Loading dependencies...");
    $('head').append($('<link href="https://intel.kd.io/kendo/styles/kendo.common.min.css" rel="stylesheet" />'));
    $('head').append($('<link href="https://intel.kd.io/kendo/styles/kendo.silver.min.css" rel="stylesheet" />'));
    $('head').append($('<link href="https://intel.kd.io/kendo/styles/reset.css" rel="stylesheet" />'));
    $('head').append($('<script src="https://intel.kd.io/kendo/js/kendo.web.min.js"></script>'));
     
    // Wait for all dependencies to load
    setTimeout(function(){
        console.log("Starting bot...");
        JSBot.Hook();
        JBGUI.Build();
    }, 5000);
});