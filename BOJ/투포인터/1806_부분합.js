/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10 15","5 1 3 5 10 7 4 9 2 8"]

function solution(input) {
    const [N, S] = input[0].split(" ").map(e => Number(e))
    const arr = input[1].split(" ").map(e => Number(e))

    let left = 0
    let right = 0
    let sum = arr[0]
    let ans = Infinity
    while (left <= right && right < N) {

        if(sum < S){
            right++
            sum+=arr[right]
        } else if (sum === S){
            ans = Math.min(ans, (right-left+1))
            right++
            sum+=arr[right]
        } else {
            ans = Math.min(ans, (right-left+1))
            sum-=arr[left]
            left++
        }
    }
    console.log(ans === Infinity ? 0 : ans);
}

solution(input);
