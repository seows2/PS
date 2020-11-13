/*
문제 설명

0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다. 구체적인 방식은 다음과 같습니다.
당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤, 각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때, 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
제한사항
arr의 행의 개수는 1 이상 1024 이하이며, 2의 거듭 제곱수 형태를 하고 있습니다. 즉, arr의 행의 개수는 1, 2, 4, 8, ..., 1024 중 하나입니다.
arr의 각 행의 길이는 arr의 행의 개수와 같습니다. 즉, arr은 정사각형 배열입니다.
arr의 각 행에 있는 모든 값은 0 또는 1 입니다.
입출력 예
arr	result
[[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]	[4,9]
[[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]	[10,15]
입출력 예 설명
입출력 예 #1
다음 그림은 주어진 arr을 압축하는 과정을 나타낸 것입니다.
ex1.png
최종 압축 결과에 0이 4개, 1이 9개 있으므로, [4,9]를 return 해야 합니다.
입출력 예 #2
다음 그림은 주어진 arr을 압축하는 과정을 나타낸 것입니다.
ex2.png
최종 압축 결과에 0이 10개, 1이 15개 있으므로, [10,15]를 return 해야 합니다. */

function solution(arr) {
    let count0 = 0
    let count1 = 0
    const dfs = (x, y, arr) => {  
        //console.log(arr);
        let sum = 0   
        let tempsum = 0 
        for (const arrx of arr) {
            for (const el of arrx) {
                sum+=el
            }
        }
        if(sum === 0) {
            count0 ++
            //console.log(count0, count1);
            return;
        } else if (sum === arr.length * arr[0].length){
            count1 ++
            //console.log(count0, count1);
            return;
        }
        if(arr.length === 2){
            for (const arrx of arr) {
                for (const el of arrx) {
                    if(el === 0) count0++
                    else count1++
                    //console.log(count0, count1);
                }
            }
            return;
        }
        
        const nn = arr.length / 2
        let tempArr1 = []
        let tempArr2 = []

        for (let i = y; i < y+nn; i++) {
            tempArr1 = []
            for (let j = x; j < x+nn; j++) {
                tempArr1.push(arr[i][j])
            }
            tempArr2.push(tempArr1)
        }
        for (const arrx of tempArr2) {
            for (const el of arrx) {
                tempsum+=el
            }
        }
        if(tempArr2.length === 2 || tempsum === tempArr2.length * tempArr2[0].length || tempsum === 0){
            dfs(0, 0, tempArr2)
        }else {
            dfs(0, 0, tempArr2)
            dfs(nn/2, 0, tempArr2)
            dfs(0, nn/2, tempArr2)
            dfs(nn/2, nn/2, tempArr2)
        }
    }
    let tempp = 0
    for (const arrx of arr) {
        for (const el of arrx) {
            tempp+=el
        }
    }
    if(tempp === 0) {
        count0 ++
        //console.log(count0, count1);
        return [1, 0]
    } else if (tempp === arr.length * arr[0].length){
        count1 ++
        //console.log(count0, count1);
        return [0, 1];
    }
    dfs(0, 0, arr)
    dfs(0, arr.length/2, arr)
    dfs(arr.length/2, 0, arr)
    dfs(arr.length/2, arr.length/2, arr)
    //console.log(count0, count1);
    return [count0, count1]
}

solution([
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1]])