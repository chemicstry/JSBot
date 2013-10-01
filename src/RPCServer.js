/*
RPCServer.js
Does Something
*/

#include ../api/ScriptAPI.js

var JBRPCServer = function()
{
    var C = {};
    
    var worker;
    
    var GetAPIFunction = function(name)
    {
        for (var i = 0; i < JBAPI.functions.length; ++i)
        {
            if (JBAPI.functions[i].name == name)
                return JBAPI.functions[i];
        }
    };
    
    var WorkerMessageEvent = function(event)
    {
        var rpccall = event.data;
        var data = GetAPIFunction(rpccall.name).pointer.apply(rpccall.args);
        worker.postMessage(data);
    };
    
    C.BindWorker = function(wrk)
    {
        worker = wrk;
        worker.onmessage = WorkerMessageEvent;
    };
    
    return C;
} ();
