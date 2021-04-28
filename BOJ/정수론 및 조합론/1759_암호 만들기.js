/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4 6", "a t c i s w"];

function solution(input) {
    const getCom = (arr, num) => {
        const result = [];
        if (num === 1) return arr.map(value => [value]);
        arr.forEach((fix, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const coms = getCom(rest, num - 1);
            const attached = coms.map(e => [fix, ...e]);
            result.push(...attached)
        })
        return result
    }
    const isPossible = (item) => {
        const mos = ["a", "e", "i", "o", "u"];
        let mo = 0;
        let ja = 0;
        for (const e of item) {
            if (mos.includes(e)) mo++;
            else ja++
        }
        if (mo >= 1 && ja >= 2) return true
        return false
    }
    const [L, C] = input[0].split(" ").map(e => Number(e));
    const string = input[1].split(" ");
    const result = getCom(string, L);
    const answer = [];
    result.forEach(e => {
        if (isPossible(e)) {
            answer.push(e.sort().join(""))
        }
    });
    console.log(answer.sort().join("\n"));
}

solution(input);
