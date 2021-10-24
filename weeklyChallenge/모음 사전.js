function solution(word) {
  const alphas = ["A", "E", "I", "O", "U"];
  let isFind = false;
  let ans = -1;

  const find = (depth, make) => {
    isFind = make === word;
    ans++;

    if (depth == 5 || isFind) return;

    for (let i = 0; i < 5; i++) {
      if (isFind) break;

      find(depth + 1, make + alphas[i]);
    }
  };

  find(0, "");

  return ans;
}
