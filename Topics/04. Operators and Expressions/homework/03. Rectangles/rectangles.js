function solve(args) {

    let width = +args[0],
        height = +args[1],
        area = (width * height).toFixed(2),
        perimeter = ((2 * width) + (2 * height)).toFixed(2);

    console.log(`${area} ${perimeter}`);

}

solve([ '2.5', '3' ]);
solve([ '5', '5' ]);
solve([ '3', '4' ]);
