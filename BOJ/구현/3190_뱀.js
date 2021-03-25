/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const n = input.shift();
function solution(n, input) {
    const isVaild = (snakeInfo) => {
        const isBodyConflict = (bodys, [dy, dx]) => {
            for (const [y,x] of bodys) {
                if(y === dy && x === dx) return true
            }
            return false
        }
        const [y, x] = snakeInfo["head"];
        const [ty, tx] = snakeInfo["dir"];

        const dx = x + tx;
        const dy = y + ty;

        if(dx < 0 || dx >= n || dy < 0 || dy >= n || isBodyConflict(snakeInfo["body"], [dy, dx])){
            return false
        } else {
            return true
        }
    }

    const moveSnake = (snakeInfo) => {
        const isApple = (dx, dy) => {
            if(map[dy][dx] === 1){
                map[dy][dx] = 0
                return true
            } 
            return false
        }
        const [y, x] = snakeInfo["head"];
        const [ty, tx] = snakeInfo["dir"];

        const dx = x + tx;
        const dy = y + ty;

        if(isApple(dx, dy)){
            snakeInfo["body"].push([y, x]);
            snakeInfo["head"] = [dy, dx];
        } else {
            snakeInfo["head"] = [dy, dx]
            if(snakeInfo["body"].length !== 0){
                snakeInfo["body"].shift();
                snakeInfo["body"].push([y, x]);
            }
        }
    }

    const numberOfApple = Number(input.shift())
    const applePos = input.splice(0,numberOfApple).map(e => e.split(" ").map(e => Number(e)))
    const numberOfSnakePos = Number(input.shift())
    const snakePos = input.splice(0,numberOfSnakePos).map(e => {
        const [x, c] = e.split(" ")
        return [Number(x), c]
    })
    
    // head: 현재 뱀 머리 위치, body: 몸 위치들, dir: 방향
    let snakeInfo = {head:[0,0], body:[], dir:[0,1]}
    const dxy = [[0,1], [1,0], [0,-1], [-1,0]]
    let curDirIdx = 0
    let answer = 0
    let map = Array.from({length:n},() => new Array(n).fill(0))
    
    
    applePos.forEach(([i,j]) => map[i-1][j-1] = 1)
    for (const [time, dir] of snakePos) {
        const repeat = time-answer
        for (let i = 0; i < repeat; i++) {
            if(isVaild(snakeInfo)){
                moveSnake(snakeInfo)
                answer++
            } else {
                console.log(answer+1);
                return;
            }
        }
        if(dir === "D"){
            //방향 오른쪽
            curDirIdx = curDirIdx + 1 === 4 ? 0 : curDirIdx + 1
            snakeInfo["dir"] = dxy[curDirIdx]
        } else {
            //방향 왼쪽
            curDirIdx = curDirIdx - 1 < 0 ? 3 : curDirIdx - 1
            snakeInfo["dir"] = dxy[curDirIdx]
        }
    }

    //충돌 없이 전부 통과
    snakeInfo["dir"] = dxy[curDirIdx]
    for (let i = 0; i < n; i++) {
        if(isVaild(snakeInfo)){
            moveSnake(snakeInfo)
            answer++
        } else {
            break
        }
    }
    console.log(answer+1);

}

solution(Number(n), input);
