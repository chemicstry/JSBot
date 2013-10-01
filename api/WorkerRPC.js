/*
WorkerRPC.js
Handles worker function calls
*/

function JBRPCFunction(name, pointer)
{
    this.name = name;
    this.pointer = pointer;
}

function JBRPCResponse(id, data)
{
    this.id = id;
    this.data = data;
}
