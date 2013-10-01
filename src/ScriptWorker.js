/*
ScriptWorker.js
Runs Scrips on Web Worker
*/

var JBScriptWorker = function() {
    var C = {};
    
    var worker;
    
    C.StartScript = function(url)
    {
        worker = new Worker(url);
        JBRPCServer.BindWorker(worker);
    };
    
    C.StopScript = function()
    {
        worker.terminate();
    }
    
    return C;
} ();
