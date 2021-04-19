function solution(s) {
    let result = 0;
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left -= 1
            right += 1
        }
        return right - (left + 1);
    }
    [...s].forEach((_, idx) => {
        result = Math.max(result, expand(idx, idx + 1), expand(idx, idx + 2))
    });
    //console.log(result);
    return result;
}

solution("abcdcba");