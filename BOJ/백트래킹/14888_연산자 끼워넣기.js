/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/
const input = ["3", "10 11 3","0 1 0 1"]

const N = Number(input[0])
const number = input[1].split(" ").map(_ => Number(_))
const operators = input[2].split(" ").map(_ => Number(_))

function solution(_, number, operators) {
    let min = Infinity
    let max = -Infinity

    const calc = (num1, num2, operator)=> {
        if(operator === 0){
            return num1 + num2
        } else if(operator === 1){
            return num1 - num2
        } else if(operator === 2){
            return num1 * num2
        } else {
            const result = num1 >= 0 ? Math.floor(num1/ num2) : -Math.floor(-num1/ num2)
            return result
        }
    }

    const dfs = (nextNumIdx, result, operators) => {
        if(operators.filter(e=> e !== 0).length === 0){
            max = result > max ? result : max
            min = result < min ? result : min
            return
        }

        for (let i = 0; i < 4; i++) {
            if(operators[i] > 0){
                operators[i]--
                const results = calc(result, number[nextNumIdx], i)
                dfs(nextNumIdx+1, results, operators)
                operators[i]++
            }
        }
    }
    dfs(1, number[0], operators)
    
    console.log(max ? max : 0);
    console.log(min ? min : 0);
}

solution(N, number, operators)