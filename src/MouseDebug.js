/*
MouseDebug.js
Draws mouse debug info

Functions:

// Creates mouse debug object on specified dom element
MouseDebug MouseDebug(DOMElement element);

// Moves mouse to a location relative to container element
void MouseMove(int x, int y);

*/

function MouseDebug(element) {
    var HBar = jQuery("<div></div>");
    var VBar = jQuery("<div></div>");
    HBar.css({"position":"absolute", "width":"100%", "height":"1px", "background-color":"#FFF"});
    VBar.css({"position":"absolute", "width":"1px", "height":"100%", "background-color":"#FFF"});
    element.append(HBar);
    element.append(VBar);
    
    var Info = jQuery("<div></div>");
    Info.css({"position":"absolute", "color":"#FFF"});
    element.append(Info);
    
    this.MouseMove = function(x, y)
    {
        HBar.css("top", y);
        VBar.css("left", x);
        Info.css("top", y - 10);
        Info.css("left", x + 2);
        Info.text(x + ", " + y);
    };
    
    this.Enable = function()
    {
        HBar.show();
        VBar.show();
        Info.show();
    };
    
    this.Disable = function()
    {
        HBar.hide();
        VBar.hide();
        Info.hide();
    };
}
