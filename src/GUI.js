/*
GUI.js
Graphical User Interface
*/

var JBGUI = function()
{
    var C = {};
    var GUI;
    
    C.Build = function()
    {
        GUI = $('<div id="JBGUI"></div>');
        
        GUI.append('<div class="k-content">\
                        <ul id="JBGUI-panelbar">\
                            <li class="k-state-active">\
                                Settings\
                            </li>\
                            <li>\
                                Scripts\
                                <ul>\
                                    <li>\
                                        From URL\
                                        <div style="padding: 5px;">\
                                            <input class="k-input" type="text" style="width: 150px" />\
                                            <span style="float: right;"><button class="k-button">Load</button></span>\
                                        </div>\
                                    </li>\
                                    <li>\
                                        From File\
                                        <div style="padding: 5px;">\
                                            <input class="k-input" type="file" style="width: 150px" />\
                                            <span style="float: right;"><button class="k-button">Load</button></span>\
                                        </div>\
                                    </li>\
                                </ul>\
                            </li>\
                            <li>\
                                Debug\
                                <ul>\
                                    <li>\
                                        GameState:<span style="float: right;">Login</span>\
                                    </li>\
                                    <li>\
                                        Player Pos:<span style="float: right;">(2689, 2069)</span>\
                                    </li>\
                                </ul>\
                            </li>\
                        </ul>\
                    </div>');
        
        
        GUI.find('#JBGUI-panelbar').kendoPanelBar();
        
        $('body').append(GUI);
        
        GUI.kendoWindow({
            width: "400px",
            title: "Javascript Bot",
            actions: [
                "Minimize"
            ]
        });
        
        GUI.parent().css('min-height', 0);
    };
    
    return C;
} ();
