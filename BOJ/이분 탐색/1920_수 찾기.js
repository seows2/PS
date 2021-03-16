/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["7", "1 3 4 6 9 13 18", "18", "3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"];

function solution(input) {
    const binarySearch = (target) => {
        let low = 0
        let high = nArrLen -1

        while (low <= high) {
            let mid = Math.floor((high+low)/2)
            let num = nArr[mid]

            if(num === target){
                return true
            } else if (num > target){
                high = mid-1
            } else {
                low = mid+1
            }
        }
        return false
    }

    const n = Number(input.shift())
    const nArr = input.shift().split(" ").map(e => Number(e))
    const m = Number(input.shift())
    const mArr = input.shift().split(" ").map(e => Number(e))
    const nArrLen = nArr.length
    let answer = []
    nArr.sort((a,b) => a-b)

    mArr.forEach(target => {
        if(binarySearch(target)) answer.push(1)
        else answer.push(0)
    })
    console.log(answer.join("\n"));
}

solution(input);
