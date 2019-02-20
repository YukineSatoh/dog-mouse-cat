function Dog(name){
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

module.exports = Dog;