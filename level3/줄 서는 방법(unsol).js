function solution(n, k) {
    const getPermutations = (arr, selectNumber) => {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]);
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
            const permutations = getPermutations(rest, selectNumber - 1);
            const attached = permutations.map((permutation) => [fixed, ...permutation]);
            results.push(...attached);
        });
        return results;
    }

    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const result = getPermutations(arr, n)
    console.log(result);
    return result[k - 1]
}
//Maximum call stack size exceeded
solution(5, 5)