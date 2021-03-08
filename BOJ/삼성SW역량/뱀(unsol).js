/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["6","3","3 4","2 5","5 3","3","3 D","15 L","17 D"];
const n = input.shift()
function solution(n, input) {
    const numberOfApple = Number(input.shift())
    const applePos = input.splice(0,numberOfApple).map(e => e.split(" ").map(e => Number(e)))
    const numberOfSnakePos = Number(input.shift())
    const snakePos = input.splice(0,numberOfSnakePos).map(e => {
        const [x, c] = e.split(" ")
        return [Number(x), c]
    })
    let map = Array.from({length:n},() => new Array(n).fill(0))
    map[0][0] = 2
    applePos.forEach(([i,j]) => map[i-1][j-1] = 1)


    const move = (info, map, curPos) => {
        const [length, dir] = info
        let [[curX, curY]] = curPos
        console.log(curX, curY);
        
        for (let i = 0; i < length; i++) {
            let nextX = curX+ dx
            let nextY = curY+ dy


        }
    }

    let curDir = "D"
    let curPos = [[0,0]]

    // 1 0 = 오른쪽
    // -1 0 = 왼쪽
    // 0 -1 = 아래
    // 0 1 = 위
    let dx = 1
    let dy = 0
    snakePos.forEach(info => {
        move(info, map, curPos)
        console.log(map);
    })
    console.log(snakePos);

}

solution(Number(n), input);
