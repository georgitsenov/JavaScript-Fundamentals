function solve(args) {
    "use strict";
    
    let x = +args[0],
        y = +args[1],
        distance;

    distance = Math.sqrt(Math.pow((x - 0) ,2) + Math.pow((y - 0), 2)).toFixed(2);

    Math.pow((x - 0), 2) + Math.pow((y - 0), 2) <= Math.pow(2, 2)
        ? console.log("yes " + distance)
        : console.log("no " + distance)

}

solve(['-2', '0']);
solve(['-1', '2']);
solve(['1.5', '-1']);
solve(['-1.5', '-1.5']);
solve(['100', '-30']);
solve(['0', '0']);
solve(['0.2', '-0.8']);
solve(['0.9', '-1.93']);
solve(['1', '1.655']);
solve(['0', '1']);
