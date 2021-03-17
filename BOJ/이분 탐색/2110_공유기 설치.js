/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4 3","1","3","5","7"];

function solution(input) {

    const [N, C] = input.shift().split(" ").map(e => Number(e))
    const house = input.map(e => Number(e)).sort((a,b)=>a-b)

    let low = 0
    let high = house[house.length-1] - house[0]
    let answer
    //console.log(house);
    
    while (low <= high) {
        let mid = Math.floor((high+low)/2)
        //console.log(low, high, mid);
        let cnt = 1
        let originHouse = house[0]
        for (let i = 1; i < house.length; i++) {
            let nextHouse = house[i]
            let diff = nextHouse - originHouse
            //console.log("diff",diff);
            if(diff >= mid){
                originHouse = nextHouse
                cnt++
            }
        }
        //console.log("cnt", cnt);

        if(cnt < C){
            high = mid -1
        } else {
            answer = mid
            low = mid+1
        }
        //console.log("answer",answer);
    }
    console.log(answer);

}

solution(input);
