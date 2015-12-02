// JavaScript source code
//Advent of code solution for Day 1 by Nambread.


//A solution to 2-1, recursive.
var DeepThought = function (input) {
    this.theAnswer = 42;
    this.input = input;
    this.index = 0;
    this.getPresentReg = /(([0-9]+)x([0-9]+)x([0-9]+))/g
    this.countPresents = this.input.split("\n");
    this.countMatches = 0;
    this.lotsOfPaper = 0;
}

DeepThought.prototype.getNextPresent = function (){
    var dimensions;
    var match = this.getPresentReg.exec(this.input);
    dimensions = !(match) ? null : [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
    //console.log(dimensions)
    return dimensions
}

DeepThought.prototype.calculateAreaNeeded = function (dimensions) {
    var paper = 2 * dimensions[0] + 2 * dimensions[1] + 2 * dimensions[2];
    dimensions.splice(dimensions.lastIndexOf(Math.max(dimensions[0], dimensions[1], dimensions[2])), 1);
    var slack = dimensions[0] * dimensions[1];
    return paper+slack
}

DeepThought.prototype.theQuestion = function (){
    return this.theAnswer;
}


//Display the solutions:
window.onload = function () {
    var input = document.getElementById("input").innerText;
    //Calculate solution to the first problem:
    var output1 = document.createElement("p")
    var answer1 = (function (input) {
        var dp = new DeepThought(input);
        while (present = dp.getNextPresent()) {
            dp.lotsOfPaper += dp.calculateAreaNeeded(present);
            dp.countMatches++;
        }
        //verifying elements aren't missed
        console.log(dp.countPresents);
        console.log(dp.countPresents.length);
        console.log(dp.countMatches);
        console.log(dp.lotsOfPaper)
    })(input);
    //Output answer
    document.body.appendChild(output1);
}
