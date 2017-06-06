function solve(args) {

  let theNumber = +args[0];

  (theNumber % 2) === 0 ? console.log('even ' + theNumber) : console.log('odd ' + theNumber);

}

solve(['3']);
solve(['2']);
solve(['-2']);
solve(['-1']);
solve(['0']);