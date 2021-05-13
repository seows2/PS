function solution(s) {
    const isCorrect = (strings) => {
        const stack = [];

        for (const item of strings) {
            if (item === "(" || item === "[" || item === "{") stack.push(item);

            if (item === ")") {
                if (stack.length && stack[stack.length - 1] === "(") {
                    stack.pop();
                } else {
                    return false
                }
            }

            if (item === "]") {
                if (stack.length && stack[stack.length - 1] === "[") {
                    stack.pop();
                } else {
                    return false
                }
            }
            if (item === "}") {
                if (stack.length && stack[stack.length - 1] === "{") {
                    stack.pop();
                } else {
                    return false
                }
            }
        }
        if (!stack.length) return true

        return false

    }
    const rotate = (s) => {
        const arr = [...s];
        arr.push(arr.shift())
        return arr.join("");
    }
    let rotated = rotate(s);
    const L = s.length;
    let cnt = 0;
    let answer = 0;
    while (cnt++ !== L) {
        rotated = rotate(rotated);
        if (isCorrect(rotated)) answer++;
    }
    console.log(answer);
}

solution("[](){}")