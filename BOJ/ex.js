/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
*/
 const input = ["10 5", "1 10 4 9 2 3 8 5 7 6"]

const [N, X] = input[0].split(" ").map(_ => Number(_))
const A = input[1].split(" ").map(_ => Number(_))

console.log(A.filter(e => e<X).join(" "));