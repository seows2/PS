/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "2 3 1";

function solution(input) {
    const [N, r, c] = input.split(" ").map(e => Number(e));
    const size = Math.pow(2, N);
    let cnt = 0

    const div = (x, y, dep) => {
        if(dep === 0){
            console.log(cnt);
            return;
        }

        const divSize = Math.floor(Math.pow(2, dep-1)/2);
        const skip = Math.pow(4, dep-1);

        if(r < x && c < y){ // 1
            div(x-divSize, y-divSize, dep-1);
        } else if(r < x && c >= y){ //2
            cnt += skip
            div(x-divSize, y+divSize, dep-1);
        } else if(r >= x && c < y){ //3
            cnt += skip*2
            div(x+divSize, y-divSize, dep-1);
        } else {
            cnt += skip*3
            div(x+divSize, y+divSize, dep-1);
        }
    }
    div(size/2, size/2, N)

}

solution(input);
