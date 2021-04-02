/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["7 8","0 1 3","1 1 7","0 7 6","1 7 1","0 3 7","0 4 2","0 1 1","1 1 1"];

function solution(input) {
    class Union {
        constructor(cnt) {
            this.parent = Array(cnt+1).fill(0).map((_,i) => i);
        }

        union(a, b){
            //console.log(this.parent);
            const u = this.find(a);
            const v = this.find(b);

            this.parent[v] = u;

        }

        find(target) {
            //parent가 자기 자신이면, root노드
            if(this.parent[target] === target){
                return target
            }

            return this.parent[target] = this.find(this.parent[target])
        }
    }
    const [N, M] = input[0].split(" ").map(e => Number(e));
    const UnionC = new Union(M)

    for (let i = 1; i <= M; i++) {
        const [order, a, b] = input[i].split(" ").map(e => Number(e));

        if(order === 0){
            UnionC.union(a, b)
        } else {
            if(UnionC.find(a) === UnionC.find(b)){
                console.log("YES");
            } else {
                console.log("NO");
            }
        }
    }
}

solution(input);
