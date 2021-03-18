/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4 11","802","743","457","539"];

function solution(input) {
    const binarySearch = (target) => {
        let ans = 0
        let low = 1
        let high = lanArr[lanArr.length -1]
        while (low <= high) {
            let sum = 0
            let mid = Math.floor((high+low)/2)
            for (let i = 0; i < lanArr.length; i++) {
                sum+= Math.floor(lanArr[i] / mid)
            }
            if(sum < target){
                high = mid-1
            } else {
                if(ans < mid) ans = mid
                low = mid+1
            }
            
        }
        return ans
    }
    const [K, N] = input.shift().split(" ").map(e => Number(e))
    const lanArr = input.map(e => Number(e)).sort((a,b) => a-b)
    const ans = binarySearch(N)
    console.log(ans);
}

solution(input);
