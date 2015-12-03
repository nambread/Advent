// JavaScript source code
//Advent of code solution for Day 3 by Nambread.


//A solution to 3-1.
var House = function (neighbourhood) {
    this.x = 0;
    this.y = 0;
    this.north;
    this.south;
    this.east;
    this.west;
    this.presents = 0;
    this.neighbourhood = neighbourhood;
}

var Neighbourhood = function () {
    this.houses = [];
    this.xStreets = 0;
    this.yStreets = 0;
    this.currentHouse = new House(this);
}

Neighbourhood.prototype.goToHouse = function (direction) {
    
}

Neighbourhood.prototype.findHouse = function () {

}

var Santa = function () {
    this.neighbourhood = new Neighbourhood();
    this.preparedDirections = false;
    this.legend = {
        "^": "north",
        "v": "south",
        ">": "east",
        "<": "west"
    }
}

Santa.prototype.prepareDirections = function (input) {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? null : e.childNodes[0].nodeValue;
}

Santa.prototype.readDirections = function (input, index) {
    return input[index];
}

Santa.prototype.startDelivery = function (input) {
    var index = 0;
    while (direction = this.readDirections(input, index++)) {
        this.deliverPresent(direction);
    }
}

Santa.prototype.deliverPresent = function (direction) {
    console.log(this.legend[direction]);
}

//Display the solutions:
window.onload = function () {
    var input = document.getElementById("input").innerText;
    var santa = new Santa();
    santa.startDelivery(input);
}
 