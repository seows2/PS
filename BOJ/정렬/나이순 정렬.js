/* const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n'); */

const input = ["3", "11 Junkyu", "12 Junkyu", "21 Junkyu", "33 Junkyu", "111 Junkyu", "151 Junkyu"]

const arr = []
let answer = ""
let cnt = 0
let length = 0 
input.shift()
for (const elem of input) {
    const [age, name] = elem.split(" ")
    arr.push({age, name, cnt})
    cnt++
}
arr.sort((a,b) => a["age"] - b["age"] || a["cnt"] - b["cnt"])

for (const elem of arr) {
    const age = elem["age"]
    const name = elem["name"]
    console.log(`${age} ${name}`);
}