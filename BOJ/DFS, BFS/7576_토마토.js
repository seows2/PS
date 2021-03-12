/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "6 5",
    "0 0 0 0 0 0",
    "-1 -1 -1 -1 -1 0",
    "0 0 0 0 0 0",
    "0 -1 -1 -1 -1 -1",
    "0 0 0 0 0 1"
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
            if (!this.head) { // stack underflow 방지
                return false;
            }
            var data = this.head.data;
            this.head = this.head.next;
            // this.head 메모리 클린
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
    const bfs = (map, queue, visited) => {
        while (queue.length()) {
            const [i, j, depth] = queue.dequeue()
            dxy.forEach(([dx, dy]) => {
                let nx = i + dx
                let ny = j + dy
                
                if(nx >= 0 && ny >= 0 && nx < n && ny < m){
                    if(map[nx][ny] === 0 && !visited[nx][ny]){
                        queue.enqueue([nx, ny, depth+1])
                        map[nx][ny] = 1
                        visited[nx][ny] = true
                        cnt = depth+1
                    }
                }
            })
        }
    }
    const check = (map) => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
               if(map[i][j] === 0){
                  return false
               }
            }
        }
        return true
    }
    const [m, n] = input.shift().split(" ").map(e => Number(e))
    let map = input.map(e => e.split(" ").map(e => Number(e)))

    let visited = Array.from({length: n}, () => Array(m).fill(false))
    const queue = new Queue()
    const dxy = [[0,1],[0,-1],[1,0],[-1,0]]
    let cnt = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
           if(map[i][j] === 1 && !visited[i][j]){
               queue.enqueue([i, j, 0])
               visited[i][j] = true
            }
        }
    }
    bfs(map, queue, visited)
    
    if(check(map)){
        console.log(cnt);
    } else {
        console.log(-1);
    }
    
}

solution(input);
