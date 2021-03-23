/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["8","100","300","200","300","0","0","0"];

function solution(input) {
    class Heap {
        constructor() {
            this.heap = [null]
        }
    
        insert(data) {
            this.heap.push(data)
    
            if(this.size() > 1){
                let cur = this.size() - 1;
    
                while (cur > 1 && this.heap[Math.floor(cur/2)] < this.heap[cur]) {
                    [this.heap[Math.floor(cur/2)], this.heap[cur]] = [this.heap[cur], this.heap[Math.floor(cur/2)]]
                    cur = Math.floor(cur/2)
                }
            }
            console.log(this.heap);
        }

        removeMax() {
            let bigOne = this.heap[1];
            
            if(this.size() > 2){
                this.heap[1] = this.heap[this.size()-1];
                this.heap.splice(this.size()-1);

                if(this.size() === 3){
                    if(this.heap[1] < this.heap[2]){
                        [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                    }
                    console.log(this.heap);
                    return bigOne;
                }

                let cur = 1;
                let leftChildIdx = cur * 2;
                let rightChildIdx = cur * 2 + 1;

                while (this.heap[leftChildIdx] && this.heap[rightChildIdx] &&
                    (this.heap[cur] < this.heap[leftChildIdx] || this.heap[cur] < this.heap[rightChildIdx])) {
                    if(this.heap[leftChildIdx] < this.heap[rightChildIdx]){
                        [this.heap[cur], this.heap[rightChildIdx]] = [this.heap[rightChildIdx], this.heap[cur]]
                        cur = rightChildIdx
                    } else {
                        [this.heap[cur], this.heap[leftChildIdx]] = [this.heap[leftChildIdx], this.heap[cur]]
                        cur = leftChildIdx
                    }

                    leftChildIdx = cur * 2
                    rightChildIdx = cur * 2 + 1
                }
                
            } else if (this.size() === 2){
                console.log(this.heap);
                this.heap.splice(1,1)
            } else {
                console.log(this.heap);
                return null 
            }
            console.log(this.heap);
            return bigOne
        }

        getHeap() {
            return this.heap
        }
    
        size(){
            return this.heap.length;
        }
    }
    const N = Number(input.shift());
    const nums = input.map(e => Number(e))
    const heap = new Heap()
    const answer = []
    for (const num of nums) {
        if(num !== 0){
            heap.insert(num)
        } else {
            const max = heap.removeMax()
            answer.push(max === null ? 0 : max)
        }
    }
    console.log(answer.join("\n"));
}

solution(input);
