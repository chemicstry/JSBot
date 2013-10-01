/*
RPCClient.js
I want a description
*/

function JBRPCCall(name)
{
    this.name = name;
}

var JBRPCClient = function()
{
    var C = {};
    
    var callstack = [];
    var lastcallid = 0;
    
    var LoadAPIFunctions = function()
    {
        for (var i = 0; i < JBAPI.functions.length; ++i)
        {
            window[JBAPI.functions[i].name] = function()
            {
                var fcall = JBRPCCall(JBAPI.functions[i].name);
                fcall.args = arguments;
                JBRPCClient.Call(fcall);
            };
        }
    };
    
    var MessageEvent = function(event)
    {
        // TODO: generators, callbacks
    };
    
    C.Call = function(fcall)
    {
        fcall.id = i;
        callStack[i] = fcall;
        postMessage(fcall);
        ++i;
    };
    
    return C;
} ();
