/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4 4","0 0 0 0","0 1 0 0","0 2 3 4","0 0 0 0"]

function solution(input) {
    const tetrominos = [
        // ㅡ 모양, 회전 2개
        [[0,0],[0,1],[0,2],[0,3]],
        [[0,0],[1,0],[2,0],[3,0]],
        //ㅁ 모양 1개
        [[0,0],[1,0],[0,1],[1,1]],
        //ㄴ 모양 4개
        [[0,0],[1,0],[2,0],[2,1]],
        [[0,0],[1,0],[0,1],[0,2]],
        [[0,0],[0,1],[1,1],[2,1]],
        [[0,0],[0,1],[0,2],[-1,2]],
        //ㄱ 모양 4개
        [[0,0],[0,1],[0,2],[1,2]],
        [[0,0],[1,0],[1,1],[1,2]],
        [[0,0],[1,0],[2,0],[2,-1]],
        [[0,0],[0,1],[1,0],[2,0]],
        //번개 2개
        [[0,0],[1,0],[1,1],[2,1]],
        [[0,0],[0,1],[-1,1],[-1,2]],
        //역번개 2개
        [[0,0],[1,0],[0,1],[-1,1]],
        [[0,0],[0,1],[1,1],[1,2]],
        // ㅗ 모양 4개
        [[0,0],[1,0],[2,0],[1,1]],
        [[0,0],[1,0],[2,0],[1,-1]],
        [[0,0],[0,1],[0,2],[1,1]],
        [[0,0],[0,1],[0,2],[-1,1]]
    ]
    const [n, m] = input.shift().split(" ").map(e => Number(e))
    const map = input.map(e => e.split(" ").map(e => Number(e)))
    let max = -1
    const isPossible = (dx, dy) => {   
        if((dy < 0 || dy >= m) || (dx < 0 || dx >= n)){
            return false
        }
        return true
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          tetrominos.forEach(tetromino =>{
              let temp = 0
              for (let k = 0; k < 4; k++) {
                const dx = tetromino[k][0] + i
                const dy = tetromino[k][1] + j
                if(isPossible(dx,dy)){
                    temp += map[dx][dy]
                }
              }
              max = max > temp ? max : temp
          })
      }   
    }
    console.log(max);

}

solution(input);
