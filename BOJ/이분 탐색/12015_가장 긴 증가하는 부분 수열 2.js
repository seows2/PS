/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["6","10 20 10 30 20 50"];

function solution(input) {
    const lowerBound = (target) => {
        let low = 0
        let high = list.length

        while (low < high) {
            let mid = Math.floor((low + high) / 2)

            if(list[mid] < target){
                low = mid+1
            } else {
                high = mid
            }
        }
        if(list[high] >= target) return high
    }
    const N = Number(input.shift())
    const nums = input.shift().split(" ").map(e => Number(e))
    const list = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        if(list[list.length-1] < num){
            list.push(num)
        } else {
            const idx = lowerBound(num)
            list[idx] = num
        }
        
    }
    console.log(list.length);
}

solution(input);
