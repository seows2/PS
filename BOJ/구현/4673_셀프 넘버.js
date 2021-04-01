
function solution() {
    const bools = Array(10000).fill(false)
    for (let i = 1; i < 10001; i++) {
       const sum = i+[...String(i)].map(e => Number(e)).reduce((a,b)=>a+b,0)
       if(sum <= 10000){
           bools[sum-1] = true
       }
    }
    
    const answer = [];
    bools.forEach((e,idx) => {
        if(e === false){
            answer.push(idx+1)
        }
    })
    console.log(answer.join("\n"));
}

solution();
