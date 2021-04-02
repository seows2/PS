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

/* //정답 코드
const input = [];
const readline = require("readline");
readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(' ').map((n) => +n));
  })
  .on("close", () => {
    solve();
    process.exit();
  });

class Tree {
  constructor(n) {
    this.parent = Array(n + 1)
      .fill(0)
      .map((_, i) => i);
  }

  union(n1, n2) {
    const a = this.find(n1);
    const b = this.find(n2);
    this.parent[b] = a;
  }

  find(node) {
    if (this.parent[node] === node) {
      return node;
    }
    this.parent[node] = this.find(this.parent[node]);
    return this.parent[node];
  }
}

const solve =() =>{
  const [n, m] = input[0];
  input.shift();
  const tree = new Tree(n);
  let answer = "";
  for (let i = 0; i < m; ++i) {
    const [a, b, c] = input[i];
    if (a === 0) {
      tree.union(b, c);
    } else {
      if (tree.find(b) === tree.find(c)) {
        answer += "YES\n";
      } else {
        answer += "NO\n";
      }
    }
  }
  console.log(answer);
} */