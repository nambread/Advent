// JavaScript source code
//Advent of code solution for Day 3 by Nambread.


//A solution to 3-1.
var House = function (x, y) {
    this.x = x;
    this.y = y;
    this.presents = 0;
    this.isHouse = true;
}

var Neighbourhood = function () {
    this.housesGrid = [[]];
    this.xStreets = 0;
    this.yStreets = 0;
    this.currentHouse = new House(0, 0);
    this.housesGrid[0].push(this.currentHouse);
}

Neighbourhood.prototype.goDirection = function (direction, buildHouses) {
    var nextHouse = this.housesGrid[this.currentHouse.x+direction.x][this.currentHouse.y+direction.y];
    if (!(nextHouse) && buildHouses) {
        nextHouse = this.buildHouse({x:(this.currentHouse.x+direction.x),y:(this.currentHouse.y+direction.y)})
    } else {
        nextHouse = this.housesGrid[this.currentHouse.x + direction.x][this.currentHouse.y + direction.y]
    }
    this.currentHouse = nextHouse;
    return nextHouse;
}

Neighbourhood.prototype.buildHouse = function (coords) {
    var newHouse = new House(coords.x, coords.y);
    this.updateGrid(newHouse,coords);
    return newHouse
}

Neighbourhood.prototype.updateGrid = function (house, coords) {
    if (!this.housesGrid[coords.x]) {
        while (this.housesGrid.length < coords.x) {
            this.housesGrid.push([]);
        }
    }
    if (!this.housesGrid[coords.x][coords.y]) {
        while (this.housesGrid[coords.x].length < coords.y - 1) {
            this.housesGrid[coords.x].push([]);
        }
    }
    this.housesGrid[coords.x][coords.y].push(house);
}

var Santa = function () {
    this.neighbourhood = new Neighbourhood();
    this.legend = {
        "^": {orientation:"north", x: 0, y: 1},
        "v": {orientation:"south", x: 0, y: -1},
        ">": {orientation:"east", x: 1, y: 0},
        "<": {orientation:"west", x: -1, y: 0}
    }
}

Santa.prototype.readDirections = function (input, index) {
    return this.legend[input[index]];
}

Santa.prototype.startDelivery = function (input) {
    var index = 0;
    while (direction = this.readDirections(input, index++)) {
        var nextHouse = this.neighbourhood.goDirection(direction, true);
        nextHouse.presents++;
    }
}

//Display the solutions:
window.onload = function () {
    var input = document.getElementById("input").innerText;
    var santa = new Santa();
    santa.startDelivery(input);
}
 