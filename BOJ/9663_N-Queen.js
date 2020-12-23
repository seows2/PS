function solution(n) {
   let arr = Array.from(Array(n), () => Array(n).fill(0))
   let count = 0

   const isPossible = (arr, n, i) => {
       for (let j = n-1; j >= 0; j--) {
           if(arr[j][i] === 1){
                return false
           }
       }
       const arrLength = arr.length
       let tempN = n
       let tempI = i
       //console.log("시작", tempN, tempI);
       while (tempN > 0 && tempI > 0) {
           tempN--
           tempI--
           if(arr[tempN][tempI] === 1){
               return false
           }
       }
       tempN = n
       tempI = i
       //console.log("시작", tempN, tempI);
       while (tempN > 0 && tempI !== arr.length-1) {
        tempN--
        tempI++
        if(arr[tempN][tempI] === 1){
            return false
        }
    }
       return true
   }

   const dfs = (arr, n) => {
       if(n === arr.length){
           console.log(arr);
           count++
           return
       }

       for (let i = 0; i < arr.length; i++) {
           arr[n][i] = 1
           if(isPossible(arr, n, i)) dfs(arr, n+1)
           arr[n][i] = 0
       }
   }
   dfs(arr, 0)
   console.log(count);
}

solution(8)