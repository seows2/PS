/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4", "1 3 5 7"];

function solution(input) {
    const isPrime = (num) => {
        if(num === 1) return false;
        const end = Math.floor(Math.sqrt(num));

        for(let i = 2; i <= end; i++) {
            if(num % i === 0) return false;
        }

        return true;
    }

    const primes = input[1].split(" ").filter(num => isPrime(Number(num)));
    console.log(primes.length);

}

solution(input);
