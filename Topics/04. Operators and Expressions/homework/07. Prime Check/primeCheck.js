function solve(args) {
  var theNumber = parseInt(args[0]);

  for(var i = 2; i < theNumber; i++) {

      if(theNumber % i == 0) {

          console.log(false);

      }

  }

  console.log(theNumber > 1);

}


solve(['2']);
solve(['23']);
solve(['-3']);
solve(['0']);
solve(['1']);
