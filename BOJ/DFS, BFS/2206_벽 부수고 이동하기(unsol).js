/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "1 1",
    "0"


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
    const queue = new Queue()
    const dxy = [[0,1],[0,-1],[1,0],[-1,0]]

    const bfs = (startX, startY, queue) => {
        let visited = Array.from({length: n}, () => Array(m).fill(Infinity))
        queue.enqueue([startX, startY, 1, 0])
        visited[startX][startY] = 0
        
        while (queue.length()) {
            const [curX, curY, distance, breakCnt] = queue.dequeue()
           
            if(curX === n-1 && curY === m-1){
                return distance
            }
            dxy.forEach(([dx, dy]) => {
                const nx = curX+dx
                const ny = curY+dy
    
                if(nx >= 0 && ny >= 0 && nx < n && ny < m){
                    if(visited[nx][ny] > breakCnt){
                        if(map[nx][ny] === 0){
                            queue.enqueue([nx, ny, distance+1, breakCnt])
                            visited[nx][ny] = breakCnt
                        } else {
                            if(breakCnt === 0){
                                queue.enqueue([nx, ny,distance+1, breakCnt+1])
                                visited[nx][ny] = breakCnt+1
                            }
                        }
                    }
                }
            })
        }
        return -1
    }

    const answer = bfs(0,0, queue)

    console.log(answer);
}

solution(input);
