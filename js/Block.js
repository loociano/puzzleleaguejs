/** 
 * Block Class 
 *
 * Luciano Rubio <luciano@loociano.com>
 * Oct 2014
 */

/** Block Types */
var types = ["blue", "yellow", "red", "purple", "green", "silver"];

/** Constructor */
function Block(type){

	(type == undefined || !this.isValidType(type)) ? 
		this.type = this.getRandomType() : this.type = type;
}

/** Returns true if the type is valid */
Block.prototype.isValidType = function(type){
	for (var i = 0; i < types.length; i++){
		if (type == types[i]) return true;
	}
	return false;
};

/** Returns a random, valid type */
Block.prototype.getRandomType = function(){
	return types[Math.round(Math.random() * (types.length - 1))];
};

/** Returns a random, valid type different from a given type */
Block.prototype.setDistinctRandomType = function(forbiddenTypes){

	var otherTypes = types.slice(0); // Copy types
	for(var i = 0; i < forbiddenTypes.length; i++){
		otherTypes.splice(types.indexOf(forbiddenTypes[i]), 1); // Remove given type
	}
	this.type = otherTypes[Math.round(Math.random() * (otherTypes.length - 1))];
}

/** Returns type */
Block.prototype.getType = function(){
	return this.type;
};

/** To String */
Block.prototype.toString = function(){
	return "[" + this.type.charAt(0).toUpperCase() + "]";
};

/** Compare type */
Block.prototype.compareType = function(otherBlock){
	if (otherBlock == null) return false;
	return this.type == otherBlock.getType();
};