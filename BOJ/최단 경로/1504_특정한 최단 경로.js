/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["7 7", "1 2 3", "3 2 5", "1 3 1", "6 5 3", "7 5 8", "5 4 2", "6 4 3", "2 6"];

function solution(input) {
    class Heap {
        constructor() {
            this.heap = [null]
        }

        insert(data) {
            // 새로운 데이터를 넣음
            this.heap.push(data)

            //새로운 데이터의 알맞은 위치를 찾는 과정
            if (this.size() > 1) {
                let cur = this.size() - 1;

                //아래에서 위로 올라가며 검사, 데이터가 추가된 위치의 부모 노드와 크기 비교 후 새로운 데이터가 더 작을 시 Swap, 루트노드까지 반복 
                while (cur > 1 && this.heap[Math.floor(cur / 2)][1] > this.heap[cur][1]) {
                    this.swap(Math.floor(cur / 2), cur)
                    cur = Math.floor(cur / 2)
                }
            }
        }

        removeMin() {
            //가장 작은 노드
            let smallOne = this.heap[1];

            //노드가 3 이상일 때.
            if (this.size() > 2) {
                //루트 노드를 가장 끝 노드로 변경
                this.heap[1] = this.heap[this.size() - 1];
                //끝 노드 제거
                this.heap.splice(this.size() - 1);

                //삭제 후 노드가 2개 일 시, 루트와 그 가지만 비교 후 가지노드가 더 작을 시 Swap
                if (this.size() === 3) {
                    if (this.heap[1][1] > this.heap[2][1]) {
                        this.swap(1, 2)
                    }
                    return smallOne;
                }

                let cur = 1;                        //부모 노드
                let leftChildIdx = cur * 2;         //왼쪽 가지
                let rightChildIdx = cur * 2 + 1;    //오른쪽 가지
                while (true) {
                    if (this.heap[leftChildIdx] && this.heap[rightChildIdx] &&
                        (this.heap[cur][1] > this.heap[leftChildIdx][1] || this.heap[cur][1] > this.heap[rightChildIdx][1])) {
                        if (this.heap[leftChildIdx][1] > this.heap[rightChildIdx][1]) {
                            this.swap(cur, rightChildIdx)
                            cur = rightChildIdx
                        } else {
                            this.swap(cur, leftChildIdx)
                            cur = leftChildIdx
                        }
                    } else if (this.heap[leftChildIdx] && this.heap[rightChildIdx] === undefined && this.heap[cur][1] > this.heap[leftChildIdx][1]) {
                        this.swap(cur, leftChildIdx)
                        cur = leftChildIdx
                    } else {
                        break;
                    }
                    leftChildIdx = cur * 2
                    rightChildIdx = cur * 2 + 1
                }


            } else if (this.size() === 2) {
                this.heap.splice(1, 1)
            } else {
                return 0
            }
            return smallOne
        }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
        }

        size() {
            return this.heap.length;
        }
    }
    const makeGraph = (n, arr) => {
        const graph = Array.from({ length: n }, () => []);
        arr.forEach(([from, to, value]) => {
            graph[from - 1].push([to - 1, value]);
            graph[to - 1].push([from - 1, value]);
        });
        return graph;
    }
    const dijkstra = (V, K, graph) => {
        const dist = Array(V).fill(Infinity);
        const visited = Array(V).fill(false);

        const heap = new Heap();
        heap.insert([K - 1, 0])
        dist[K - 1] = 0
        visited[K - 1] === true

        while (heap.size() !== 1) {
            const [curPos, curWeight] = heap.removeMin();

            if (visited[curPos]) continue;
            visited[curPos] = true

            dist[curPos] = dist[curPos] > curWeight ? curWeight : dist[curPos];
            graph[curPos].forEach(([P, W]) => {
                heap.insert([P, W + curWeight])
            })
        }
        return dist
    }
    const [N, E] = input.shift().split(" ").map(e => Number(e));
    const [v1, v2] = input.pop().split(" ").map(e => Number(e));
    const arr = input.map(e => e.split(" ").map(e => Number(e)));
    const graph = makeGraph(N, arr);
    const fir = dijkstra(N, 1, graph);
    const sec = dijkstra(N, v1, graph);
    const thi = dijkstra(N, v2, graph);
    const sum1 = fir[v1 - 1] + sec[v2 - 1] + thi[N - 1];
    const sum2 = fir[v2 - 1] + thi[v1 - 1] + sec[N - 1];
    const answer = Math.min(sum1, sum2) === Infinity ? -1 : Math.min(sum1, sum2)
    console.log(answer);

}

solution(input);
