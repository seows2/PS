/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["8",
"11110000",
"11110000",
"00011100",
"00011100",
"11110000",
"11110000",
"11110011",
"11110011"
];

function solution(input) {
    
    const check = (x, y, len, depth) => {
        const color = map[x][y]
 
        for (let i = x; i < x+len; i++) {
            for (let j = y; j < y+len; j++) {
                if(color !== map[i][j]){
                    return false
                }
            }  
        }
        answer+=color

        return true
    }
    const divide = (x, y, len, depth) => {
        if(check(x,y, len, depth)) return
        answer+="("
        divide(x,y, len/2, depth+1)
        divide(x,y+(len/2), len/2, depth+1)
        divide(x+(len/2),y, len/2, depth+1)
        divide(x+(len/2),y+(len/2), len/2, depth+1)
        answer+=")"
    }

   const n = Number(input.shift())
   const map = input.map(e => e.split("").map(e => Number(e)))
   let depth = 0
   let answer = ""

   divide(0,0,n, depth)
   console.log(answer);

}

solution(input);
