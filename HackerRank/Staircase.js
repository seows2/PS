'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    for (let i = 1; i <= n; i++) {
       const blank = " ".repeat(n-i);
       const plat = "#".repeat(i);
       console.log(blank + plat);
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
