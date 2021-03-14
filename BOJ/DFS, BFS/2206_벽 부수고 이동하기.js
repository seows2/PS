/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "4 4",
    "0101",
    "0101",
    "0001",
    "1110"

];
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
    class Queue {
        constructor() {
            this.count = 0;
            this.head = null;
            this.rear = null;
        }
        enqueue(data) {
            var node = new Node(data);
            if (!this.head) {
                this.head = node;
            } else {
                this.rear.next = node;
            }
            this.rear = node;
            return ++this.count;
        }
        dequeue() {
            if (!this.head) { 
                return false;
            }
            var data = this.head.data;
            this.head = this.head.next;
            --this.count;
            return data;
        }
        front() {
            return this.head && this.head.data;
        }
        length(){
            return this.count
        }
    }

function solution(input) {
    const [n, m] = input.shift().split(" ").map(e => Number(e))
    let map = input.map(e => e.split("").map(e => Number(e)))
    const cnt = Array.from({length: n}, () => Array(m).fill(0))
    const dxy = [[0,1],[0,-1],[1,0],[-1,0]]

    const bfs = (startX, startY) => {
        let visited = Array.from({length: n}, () => Array(m).fill(false))
        const queue = new Queue()
        queue.enqueue([startX, startY])
        visited[startX][startY] = true

        while (queue.length()) {
            const [curX, curY] = queue.dequeue()

            dxy.forEach(([dx, dy]) => {
                const nx = curX+dx
                const ny = curY+dy
    
                if(nx >= 0 && ny >= 0 && nx < n && ny < m){
                    if(map[nx][ny] === 0 && !visited[nx][ny]){
                        queue.enqueue([nx, ny])
                        cnt[nx][ny] = cnt[nx][ny] === 0 ? cnt[curX][curY]+1 : Math.min(cnt[nx][ny],cnt[curX][curY]+1)
                        visited[nx][ny] = true
                    }
                }
            })
        }
    }

    bfs(0,0)

    for (let i = 0; i < n; i++) {
       for (let j = 0; j < m; j++) {
        if(map[i][j] === 1){
            map[i][j] = 0
            bfs(0,0)
            map[i][j] = 1
        }
       }   
    }
    const answer = cnt[n-1][m-1] === 0 ? -1 : cnt[n-1][m-1]+1
    console.log(answer);
}

solution(input);
