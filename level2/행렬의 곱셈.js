function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      arr1[i].forEach((e, k) => {
        //console.log(e, arr2[k][j]);
        sum += e * arr2[k][j];
      });
      temp.push(sum);
    }
    answer.push(temp);
  }
  //console.log(answer);
  return answer;
}
solution(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6, 7],
    [8, 9, 10],
  ]
);
