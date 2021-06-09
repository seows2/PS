'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const base = s.substring(s.length-2, s.length);
    const [hour, minute, second] = s.slice(0, s.length-2).split(":");
    if(base === "PM"){
        let newHour = Number(hour);
        if(newHour < 12) {
            newHour = String(newHour + 12);
        }
        
        return `${newHour}:${minute}:${second}`
    } else {
        let newHour = hour;
        if(newHour >= 12){
            newHour = String(newHour - 12).padStart(2, 0);
        }
        return `${newHour}:${minute}:${second}`
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
