/* const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n'); */

const input = ["5 2 2", "1","2","3","4","5","1 3 6", "2 2 5", "1 5 2", "2 3 5"]

function solution(input) {
    const N = Number(input[0].split(" ")[0])
    const num = []
    const trans = []
    for (let i = 1; i < N+1; i++) {
        num.push(Number(input[i]))
    }

    for (let i = N+1; i < input.length; i++) {
    trans.push(input[i])
    }

    for (const elem of trans) {
        const [a, b, c] = elem.split(" ").map(_=>Number(_))
        if(a === 1){
            num.splice(b-1,1,c)
         } else {
             let sum = num.slice(b-1,c).reduce((a,b) => a+b,0)
             console.log(sum);
        }
    }
}

solution(input)
