/*
Keyboard.js
Keyboard Emulator

*/

function JBKeyboardEvent(type, keyCode, charCode)
{
    this.type = type;
    this.keyCode = keyCode;
    this.charCode = charCode;
    this.timeStamp = new Date().getTime();
}

var JBKeyboard = function() {
    var C = {};
    
    var KeyboardElement;
    
    var GameKeyDownHandler;
    var GameKeyUpHandler;
    var GameKeyPressHandler;
    
    var Enabled = true;
    
    var SendKeyDown = function(keyCode)
    {
        var event = new JBKeyboardEvent("keydown", keyCode, 0);
        GameKeyDownHandler(event);
    };
    
    var SendKeyUp = function(keyCode)
    {
        var event = new JBKeyboardEvent("keyup", keyCode, 0);
        GameKeyUpHandler(event);
    };
    
    var SendKeyPress = function(charCode)
    {
        var event = new JBKeyboardEvent("keypress", charCode, charCode);
        GameKeyPressHandler(event);
    };
    
    var KeyDownHandler = function(event)
    {
        if (Enabled)
            GameKeyDownHandler(event);
    };
    
    var KeyUpHandler = function(event)
    {
        if (Enabled)
            GameKeyUpHandler(event);
    };
    
    var KeyPressHandler = function(event)
    {
        if (Enabled)
            GameKeyPressHandler(event);
    };
    
    var CharToKeycode = function(char)
    {
        if (char == char.toLowerCase())
            return (char.charCodeAt(0)-32);
        return char.charCodeAt(0);
    }
    
    C.SendSpecial = function(keyCode)
    {
        SendKeyDown(keyCode);
        // TODO: fix sleep
        SendKeyUp(keyCode);
    };
    
    C.SendChar = function(char)
    {
        SendKeyDown(CharToKeycode(char));
        SendKeyPress(char.charCodeAt(0));
        // TODO: fix sleep
        setTimeout(SendKeyUp, JBUtil.RandomInt(50,500), CharToKeycode(char));
    };
    
    C.SendString = function(test)
    {
        for (var i = 0; i < test.length; ++i)
        {
            this.SendChar(test[i]);
            // TODO: fix sleep
        }
    };
    
    C.Hook = function(element)
    {
        KeyboardElement = element;
        
        GameKeyDownHandler = element.onkeydown;
        element.onkeydown = KeyDownHandler;
        
        GameKeyUpHandler = element.onkeyup;
        element.onkeyup = KeyUpHandler;
        
        GameKeyPressHandler = element.onkeypress;
        element.onkeypress = KeyPressHandler;
    };
    
    return C;
} ();