function solve(args) {
    "use strict";

    let a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        h = parseFloat(args[2]),
        area = (((a + b) / 2) * h).toFixed(7);

    console.log(area)

}

solve(['5', '7', '12']);
solve(['2', '1', '33']);
solve(['8.5', '4.3', '2.7']);
solve(['100', '200', '300']);
solve(['0.222', '0.333', '0.555']);
