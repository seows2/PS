/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/
/**
 *  1 => 2개
 *  2 => 5개
 *  3 => 5개
 *  4 => 4개
 *  5 => 5개
 *  6 => 6개
 *  7 => 3개
 *  8 => 7개
 *  9 => 6개
 *  0 => 6개
 * 
 */
const input = ["10", "10", "9", "8", "10", "10", "100", "50", "2", "3", "6"];

function solution(input) {
    const min = Array(101).fill(Number.MAX_SAFE_INTEGER);
    min[2] = 1;
    min[3] = 7;
    min[4] = 4;
    min[5] = 2;
    min[6] = 6;
    min[7] = 8;
    min[8] = 10;
    const setMin = () => {
        const add = [1, 7, 4, 2, 0, 8];
        for (let i = 9; i <= 100; i++) {
            for (let j = 2; j <= 7; j++) {
                const curNum = "" + min[i - j] + add[j - 2];
                min[i] = Math.min(Number(curNum), min[i]);
            }
        }
    }
    const getMin = (num) => {
        return min[num];
    }
    const getMax = (num) => {
        let max = "";
        if (num % 2 === 0) {
            //짝수
            max = "1".repeat(num / 2);
        } else {
            //홀수
            max = "7"
            num -= 3;
            max += "1".repeat(num / 2);
        }
        return max
    }
    const N = Number(input.shift());
    setMin();

    const answer = input.map(num => `${getMin(num)} ${getMax(num)}`).join("\n");
    console.log(answer);
}

solution(input);
