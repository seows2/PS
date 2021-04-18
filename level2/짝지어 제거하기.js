function solution(s) {
    const stack = [];

    for (const elm of s) {
        stack.push(elm);
        if (stack[stack.length - 2] && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}
solution("cdcd")