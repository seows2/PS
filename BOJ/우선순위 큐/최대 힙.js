/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["13","8","3","7","1","2","6","4","0","0"];

function solution(input) {
    class Heap {
        constructor() {
            this.heap = [null]
        }
    
        insert(data) {
            // 새로운 데이터를 넣음
            this.heap.push(data)
    
            //새로운 데이터의 알맞은 위치를 찾는 과정
            if(this.size() > 1){
                let cur = this.size() - 1;
                
                //아래에서 위로 올라가며 검사, 데이터가 추가된 위치의 부모 노드와 크기 비교 후 새로운 데이터가 더 클 시 Swap, 루트노드까지 반복 
                while (cur > 1 && this.heap[Math.floor(cur/2)] < this.heap[cur]) {
                    this.swap(Math.floor(cur/2), cur)
                    cur = Math.floor(cur/2)
                }
            }
        }

        removeMax() {
            //가장 큰 노드
            let bigOne = this.heap[1];

            //노드가 3 이상일 때.
            if(this.size() > 2){
                //루트 노드를 가장 끝 노드로 변경
                this.heap[1] = this.heap[this.size()-1];
                //끝 노드 제거
                this.heap.splice(this.size()-1);

                //삭제 후 노드가 2개 일 시, 루트와 그 가지만 비교 후 가지노드가 더 클 시 Swap
                if(this.size() === 3){
                    if(this.heap[1] < this.heap[2]){
                        this.swap(1,2)
                    }
                    return bigOne;
                }

                let cur = 1;                        //부모 노드
                let leftChildIdx = cur * 2;         //왼쪽 가지
                let rightChildIdx = cur * 2 + 1;    //오른쪽 가지
                while (true) {
                    if(this.heap[leftChildIdx] && this.heap[rightChildIdx] && 
                    (this.heap[cur] < this.heap[leftChildIdx] || this.heap[cur] < this.heap[rightChildIdx])){
                        if(this.heap[leftChildIdx] < this.heap[rightChildIdx]){
                            this.swap(cur, rightChildIdx)
                            cur = rightChildIdx
                        } else {
                            this.swap(cur, leftChildIdx)
                            cur = leftChildIdx
                        }
                    } else if (this.heap[leftChildIdx] && this.heap[rightChildIdx] === undefined && this.heap[cur] < this.heap[leftChildIdx]){
                            this.swap(cur, leftChildIdx)
                            cur = leftChildIdx
                    } else {
                        break;
                    }
                    leftChildIdx = cur * 2
                    rightChildIdx = cur * 2 + 1
                }

                
            } else if (this.size() === 2){
                this.heap.splice(1,1)
            } else {
                return 0 
            }
            return bigOne
        }

        swap(i, j){
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
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
            answer.push(max)
        }
    }
    console.log(answer.join("\n"));
}

solution(input);
