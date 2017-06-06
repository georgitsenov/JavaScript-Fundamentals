function solve(args) {
  "use strict";

  var x = parseFloat(args[0]);
  var y = parseFloat(args[1]);
  var theResult = "";

  Math.pow((x - 0), 2) + Math.pow((y - 0), 2) <= Math.pow(2.5, 2)
      ? theResult = "inside circle"
      : theResult = "outside circle"

  if ((y <= 1 && y >= -1) && (x <= 5 && x >= -1)) {
    theResult += " inside rectangle";
  } else {
    theResult += " outside rectangle";
  }

  console.log(theResult);

}

solve(['2.5', '2']);
solve(['0', '1']);
solve(['2.5', '1']);
solve(['1', '2']);
