function solve(args) {

    //let theNumber = parseInt(args[0].substr(-3, 1));
    let theNumberBits = (args[0] >>> 0).toString(2);

    theNumberBits.length < 4
    ? console.log("0") : console.log(theNumberBits.substr(-4, 1))

}

solve(['15']);
solve(['1024']);
