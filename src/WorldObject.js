/*
WorldObject.js
World Object Prototype
*/

function JBWorldObject(pointer) {
    this.pointer = pointer;
    
    this.GetName = function()
    {
        return this.pointer._bei;
    }
    
    this.GetPosition = function() {
        var pos = bfj();
		pointer._uxn(pos, false);
        return new JBPos(pos.x, pos._bnm, pos.layer);
    }
}