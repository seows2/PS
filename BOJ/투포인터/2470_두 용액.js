/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5","-2 4 -99 -1 98"];

function solution(input) {
    const N = Number(input[0])
    const arr = input[1].split(" ").map(e => Number(e)).sort((a,b)=>a-b)

    let left = 0
    let right = arr.length-1
    let minSum = Infinity
    let answer = [0,0]
    while (left < right) {
        const sum = arr[left] + arr[right]

        if(minSum > Math.abs(sum)){
            minSum = Math.abs(sum)
            answer[0] = arr[left]
            answer[1] = arr[right]
            if(sum === 0) break
        }
        
        if(sum < 0){
            left++
        } else {
            right--
        }
    }
    console.log(answer.join(" "));
}

solution(input);
