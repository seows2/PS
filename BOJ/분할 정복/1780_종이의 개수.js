/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["9",
"0 0 0 1 1 1 -1 -1 -1",
"0 0 0 1 1 1 -1 -1 -1",
"0 0 0 1 1 1 -1 -1 -1",
"1 1 1 0 0 0 0 0 0",
"1 1 1 0 0 0 0 0 0",
"1 1 1 0 0 0 0 0 0",
"0 1 -1 0 1 -1 0 1 -1",
"0 -1 1 0 1 -1 0 1 -1",
"0 1 -1 1 0 -1 0 1 -1"
];

function solution(input) {
    const check = (x, y, len) => {
        const color = map[x][y]
 
        for (let i = x; i < x+len; i++) {
            for (let j = y; j < y+len; j++) {
                if(color !== map[i][j]){
                    return false
                }
            }  
        }
        if(color === -1){
            answer[0]++
        } else if(color ===0){
            answer[1]++
        } else {
            answer[2]++
        }
        return true
    }
    const divide = (x, y, len) => {
        if(check(x,y, len)) return

        divide(x,y, len/3)
        divide(x+(len/3),y, len/3)
        divide(x+(len/3)*2,y, len/3)
        divide(x,y+(len/3), len/3)
        divide(x,y+(len/3)*2, len/3)
        divide(x+(len/3),y+(len/3), len/3)
        divide(x+(len/3)*2,y+(len/3)*2, len/3)
        divide(x+(len/3),y+(len/3)*2, len/3)
        divide(x+(len/3)*2,y+(len/3), len/3)
    }

   const n = Number(input.shift())
   const map = input.map(e => e.split(" ").map(e => Number(e)))
   let answer = [0, 0, 0] // [-1, 0,1]

   divide(0,0,n)

   console.log(answer.join("\n"));
}

solution(input);

