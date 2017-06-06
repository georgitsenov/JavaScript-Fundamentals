function solve(args) {

    let theNumber = +args[0];

    ((theNumber % 7) === 0) && ((theNumber % 5) === 0) ?
      console.log('true ' + theNumber) : console.log('false ' + theNumber);

}

solve(['3']);
solve(['0']);
solve(['5']);
solve(['7']);
solve(['35']);
solve(['140']);
