/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["aabbcc", "xxyybb"];

function solution(input) {
    
    const word1 = input[0];
    const word2 = input[1];

    const obj1 = {}
    const obj2 = {}

    for (const alpha of word1) {
        obj1[alpha] = obj1[alpha] ? obj1[alpha]+1 : 1
    }
    for (const alpha of word2) {
        obj2[alpha] = obj2[alpha] ? obj2[alpha]+1 : 1
    }
    Object.entries(obj1).forEach(([key, value]) => {
        if(obj2[key]){
            obj2[key] = Math.abs(obj2[key] - value);
            obj1[key] = 0
        }
    })
    const sum1 = Object.values(obj1).reduce((a,b) => a+b, 0)
    const sum2 = Object.values(obj2).reduce((a,b) => a+b, 0)

    console.log(sum1+sum2);
}

solution(input);
