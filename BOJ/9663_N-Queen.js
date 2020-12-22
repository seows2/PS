function solution(n) {
   let arr = Array.from(Array(n), () => Array(n).fill(0))
   let count = 0

   const isPossible = (arr, n, i) => {
       for (let j = n-1; j >= 0; j--) {
           if(arr[j][i] === 1){
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
           //console.log(arr);
           if(isPossible(arr, n, i)) dfs(arr, n+1)
           arr[n][i] = 0
       }
   }
   dfs(arr, 0)
}

solution(4)