/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3", "0 0 13 40 0 37", "0 0 3 0 7 4", "1 1 1 1 1 5"];

function solution(input) {
    const circlePoint = (string) => {
        const [x1, y1, r1, x2, y2, r2] = string.split(" ").map(e => Number(e));
        const distance = Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2);
        
        if(x1 === x2 && y1 === y2 && r1 === r2) return -1;

        if(distance > Math.pow(r2 + r1, 2)) return 0; // 원 접점이 X
        if(distance < Math.pow(r2 - r1, 2)) return 0; // 원 접점이 X
        if(distance === Math.pow(r2 - r1, 2)) return 1; // 원이 내접
        if(distance === Math.pow(r2 + r1, 2)) return 1; // 원이 외접

        return 2;
    }
    input.shift();

    const answer = input.map(string => circlePoint(string));

    console.log(answer.join("\n"));

}

solution(input);
