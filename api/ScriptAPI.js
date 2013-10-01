/*
ScriptAPI.js
Contains Script API Definitions
*/

var JBAPI = {
    revision: 1,
    functions: [
        new JBRPCFunction("GetPosition", JBMovement.GetPosition),
        new JBRPCFunction("WalkTo", JBMovement.WalkTo),
        new JBRPCFunction("Alert", alert)
    ]
};
