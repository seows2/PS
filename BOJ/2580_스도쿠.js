/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/

const input = [
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0"
]

function solution(n) {
    let answer = ""

    const getZeroPosition = (arr) => {
        const zeroPos = []
        arr.forEach((line, x) => line.forEach((number, y) => {
            if(number === 0){
                zeroPos.push([x, y])
            }
        }));
        return zeroPos
    }
    
    const isPossible = (x, y, num, sudokuArr) => {
        for (let i = 0; i < 9; i++) {
            if(num === sudokuArr[x][i]) return false
        }
        for (let i = 0; i < 9; i++) {
            if(num === sudokuArr[i][y]) return false
        }

        const tempX = Math.floor(x/3)*3
        const tempY = Math.floor(y/3)*3

        for (let i = tempX; i < tempX+3; i++) {
           for (let j = tempY; j < tempY+3; j++) {
               if(num === sudokuArr[i][j]) return false
           } 
        }
        return true
    }

    const dfs = (count, zeroPos, sudokuArr) => {
        if(count === zeroPos.length){
            sudokuArr.forEach((line,idx) => {
                answer += idx !== sudokuArr.length-1 ? `${line.join(" ")}\n` : `${line.join(" ")}`
            })
            console.log(answer);
            process.exit(0);
        }
        
        const [x, y] = zeroPos[count]

        for (let i = 1; i < 10; i++) {
            if(isPossible(x, y, i, sudokuArr)){
                sudokuArr[x][y] = i
                dfs(count+1, zeroPos, sudokuArr)
                sudokuArr[x][y] = 0
            }
        }
    }

    let sudokuArr = []
    for (let i = 0; i < n.length; i++) {
        sudokuArr.push(n[i].split(" ").map(e=>Number(e))) 
    }
   const zeroPos = getZeroPosition(sudokuArr)
   
   dfs(0, zeroPos, sudokuArr)

}

solution(input)