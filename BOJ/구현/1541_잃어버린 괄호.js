/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "05+060-100+20-23";

function solution(input) {
    const arr = input.split("-");
    let check = true;
    let init = 0;
    let sum = 0;

    for (const el of arr) {
        const temp = el.split(/(\D)/).map(e =>{
            if(Number(e)) return parseInt(e, 10);
            else return e;
        }).join("")
        if(check) {
            init = eval(temp);
            check = false;
        }
        else {
            sum += eval(temp);
        }
    }
    
    console.log(init - sum);

}

solution(input);
