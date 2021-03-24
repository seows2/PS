/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "0";

function solution(input) {
    const originNum = input
    let cnt = 0
    let newNum = originNum.length === 2 ? originNum : 0+originNum

    while (true) {
        cnt++
        const numSum = String([...newNum].map(e => Number(e)).reduce((a,b) => a+b, 0));
        if(numSum.length === 2){
            newNum = String(Number(newNum[1] + numSum[1]))
        } else {
            newNum = String(Number(newNum[1] + numSum[0]))
        }
        if(newNum === originNum){
            break;
        }
        newNum = newNum.length === 2 ? newNum : 0+newNum
    }
    

    console.log(cnt);
}

solution(input);
