function solution(n) {
    let ans = 0
    for(let i = 1; i < Math.floor(n/2)+1; i++){
        let num = i
        let sum = i
       while(sum < n){
           sum += num++
           if(sum === n){
               ans++
               break;
           }
       }
    }
    return ans+1
}
solution(10000)