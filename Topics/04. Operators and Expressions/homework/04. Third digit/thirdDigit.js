function solve(args) {

    let theNumber = parseInt(args[0].substr(-3, 1));

    args[0].length < 3
      ? console.log("false " + 0)
      :   theNumber === 7
        ? console.log("true")
        : console.log("false " + theNumber)

}

solve(['5']);
solve(['701']);
solve(['9703']);
solve(['877']);
solve(['777877']);
solve(['9999799']);
