function solution(A,B){
    let answer = 0;
    let length = A.length
    
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    
    
    for(let i = 0; i < length; i++){
        const A_max = A[i]
        const B_min = B[i]
        answer += (A_max*B_min)
    }

    return answer;
}