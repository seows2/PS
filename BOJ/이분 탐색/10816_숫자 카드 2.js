/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["10", "6 3 2 10 10 10 -10 -10 7 3", "8","10 9 -5 2 3 4 5 -10"];

function solution(input) {
    const getLowerIdxByNumber = (target) => {
        let low = 0
        let high = nArr.length

        while (low < high) {
            let mid = Math.floor((low + high) / 2)

            if(nArr[mid] < target){
                low = mid+1
            } else {
                high = mid
            }
        }
        if(nArr[high] === target) return high
        else return -1
    }
    const getUpperIdxByNumber = (target) => {
        let low = 0
        let high = nArr.length

        while (low < high) {
            let mid = Math.floor(low+ (high - low) / 2)

            if(nArr[mid] <= target){
                low = mid +1
            } else {
                high = mid
            }
        }

        if(nArr[low-1] === target) return low
        else return -1
    }
    const N = input.shift()
    const nArr = input.shift().split(" ").map(e => Number(e)).sort((a,b)=>a-b)
    const M = input.shift()
    const mArr = input.shift().split(" ").map(e => Number(e))
    let answer = []

    mArr.forEach(target => {
        let lowerIdx = getLowerIdxByNumber(target)
        let upperIdx = getUpperIdxByNumber(target)
        let diff = upperIdx - lowerIdx
        diff > 0 ? answer.push(diff) : answer.push(0)
    })
    console.log(answer.join(" "));
}

solution(input);
