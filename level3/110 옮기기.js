function solution(s) {
    var answer = [];
    for(let str of s) {
        const stack = []
        let cnt = 0

        for(let char of str) {
            if(char === "0") {
                if(stack[stack.length-1] === "1" && stack[stack.length-2] === "1") {
                    cnt++
                    stack.pop()
                    stack.pop()
                } else stack.push(char)
            }else stack.push(char)
        }

        if(cnt === 0) {

            answer.push(str)    

        } else {
            const temp = []

            while(stack.length) {
                if(stack[stack.length-1] === "1") temp.push(stack.pop())
                else if(stack[stack.length-1] === "0") break
            }

            temp.unshift("110".repeat(cnt))

            answer.push(stack.join("") + temp.join(""))
        }
    }
    console.log(answer);
    return answer;
}

solution(["1110","100111100","0111111010"])