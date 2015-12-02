// JavaScript source code
//Advent of code solution for Day 1 by Nambread.


//A solution to 2-1, recursive.
var DeepThought = function (input) {
    this.theAnswer = 42;
    this.input = input;
    this.index = 0;
    this.getPresentReg = /(([0-9]+)x([0-9]+)x([0-9]+))/g
    this.lotsOfPaper = 0;
    this.lotsOfRibbon = 0;
}

DeepThought.prototype.getNextPresent = function (){
    var dimensions;
    var match = this.getPresentReg.exec(this.input);
    dimensions = !(match) ? null : [parseInt(match[2], 10), parseInt(match[3], 10), parseInt(match[4], 10)];
    return dimensions
}

DeepThought.prototype.calculateAreaNeeded = function (dimensions) {
    var surfaceArea = 2 * dimensions[0] * dimensions[1] + 2 * dimensions[1] * dimensions[2] + 2 * dimensions[2] * dimensions[0];
    return surfaceArea
}

DeepThought.prototype.calculateRibbonNeeded = function (dimensions) {
    var bigAssBow = dimensions[0] * dimensions[1] * dimensions[2];
    return bigAssBow
}

DeepThought.prototype.findSmallestSide = function (dimensions) {
    dimensions.splice(dimensions.lastIndexOf(Math.max(dimensions[0], dimensions[1], dimensions[2])), 1);
    return dimensions
}

DeepThought.prototype.theQuestion = function (){
    return this.theAnswer;
}


//Display the solutions:
window.onload = function () {
    var input = document.getElementById("input").innerText;
    //Calculate solution to the first problem:
    var answers = (function (input) {
        var dp = new DeepThought(input);
        while (present = dp.getNextPresent()) {
            dp.lotsOfPaper += dp.calculateAreaNeeded(present);
            dp.lotsOfRibbon += dp.calculateRibbonNeeded(present);
            //moved the splice out of the first function, since it affects the present var
            //used in the loop.
            var smallestSide = dp.findSmallestSide(present);
            dp.lotsOfPaper += smallestSide[0] * smallestSide[1];
            dp.lotsOfRibbon += smallestSide[0] * 2 + smallestSide[1] * 2;
        }
        return {"paperNeeded":dp.lotsOfPaper,"ribbonNeeded": dp.lotsOfRibbon};
    })(input);
    console.log(answers.paperNeeded+" sq. ft of paper needed! Golly.")
    console.log(answers.ribbonNeeded+" ft of ribbon needed! Gosh.")

}
