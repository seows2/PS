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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const plus = [];
    const minus = [];
    const zeros = [];
    const length = arr.length;
    for (const num of arr) {
        if(num > 0) {
            plus.push(num);
        } else if(num === 0) {
            zeros.push(num);
        } else {
            minus.push(num);
        }
    }
    const positive = (plus.length / length).toFixed(5);
    const negative = (minus.length / length).toFixed(5);
    const zero = (zeros.length / length).toFixed(5);
    
    console.log([positive, negative, zero].join("\n"))

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
