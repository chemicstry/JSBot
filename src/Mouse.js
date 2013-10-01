/*
Mouse.js
Mouse Emulator

Functions:

// Hooks runescape canvas element mouse events
void HookEvents(DOMElement element);

// Enables mouse iterraction
void Enable();

// Disables mouse iterraction
void Disable();

// Moves mouse to a location relative to game canvas
vois Move(int x, int y);

// Clicks mouse (0 - LClick, 1 - RClick)
void Click(int button, int x = currentx, int y = currenty);

*/

#include MouseDebug.js

function JBMouseEvent(event, x, y, button)
{
    this.event = event;
    this.x = x;
    this.y = y;
    this.clientX = x;
    this.clientY = y;
    this.button = button;
    
    this.timeStamp = new Date().getTime();
    
    this.preventDefault = function()
    {
        return;
    }
}


var JBMouse = function() {
    var GameMouseElement;
    var GameMouseMoveHandler;
    var GameMouseDownHandler;
    var GameMouseUpHandler;
    var MouseDebugger;
    var MouseX = 0;
    var MouseY = 0;
    var C = {};
    var Enabled = true;
    
    var SendMouseMove = function(x, y)
    {
        var Rect = GameMouseElement.getBoundingClientRect();
        
        var event = new JBMouseEvent("mousemove", x+Rect.left, y+Rect.top, null);
        MouseX = x;
        MouseY = y;
        
        console.log(event);
        MouseDebugger.MouseMove(x, y);
        GameMouseMoveHandler(event);
    };
    
    var SendMouseDown = function(x, y, button)
    {
        var Rect = GameMouseElement.getBoundingClientRect();
        
        var event = new JBMouseEvent("mousedown", x+Rect.left, y+Rect.top, button);
        
        GameMouseDownHandler(event);
    };
    
    var SendMouseUp = function(button)
    {
        var Rect = GameMouseElement.getBoundingClientRect();
        
        var event = new JBMouseEvent("mouseup", MouseX+Rect.left, MouseY+Rect.top, button);
        
        GameMouseUpHandler(event);
    };
    
    var MouseMoveHandler = function(event)
    {
        if (Enabled) {
            GameMouseMoveHandler(event);
            
            var Rect = GameMouseElement.getBoundingClientRect();
            MouseDebugger.MouseMove(event.x-Rect.left, event.y-Rect.top);
        }
    };
    
    var MouseDownHandler = function(event)
    {
        if (Enabled)
            GameMouseDownHandler(event);
    };
    
    var MouseUpHandler = function(event)
    {
        if (Enabled)
            GameMouseUpHandler(event);
    };
    
    C.HookEvents = function(element)
    {
        GameMouseElement = element;
        
        GameMouseMoveHandler = element.onmousemove;
        element.onmousemove = MouseMoveHandler;
        
        GameMouseDownHandler = element.onmousedown;
        element.onmousedown = MouseDownHandler;
        
        GameMouseUpHandler = element.onmouseup;
        element.onmouseup = MouseUpHandler;
        
        MouseDebugger = new MouseDebug(jQuery(element));
    };
    
    C.Enable = function()
    {
        Enabled = true;
    };
    
    C.Disable = function()
    {
        Enabled = false;
    };
    
    C.Move = function(x, y)
    {
        SendMouseMove(x, y);
    };
    
    C.Click = function(button, x, y)
    {
        if (x === null || y === null) {
            x = MouseX;
            y = MouseY;
        }
        
        SendMouseDown(x, y, button);
        
        // Send mouse up delayed
        setTimeout(SendMouseUp, JBUtil.RandomInt(10, 200), button);
    };
    
    return C;
} ();
