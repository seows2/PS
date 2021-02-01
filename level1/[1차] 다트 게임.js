function solution(dartResult) {
  const arr = dartResult.split(/(\d+)/);
  arr.shift();
  const arrLength = arr.length;
  const numArr = [];
  const optionArr = [];
  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) numArr.push(Number(arr[i]));
    else optionArr.push(arr[i].split(""));
  }
  optionArr.forEach(([bonus, option], i) => {
    if (bonus === "D") numArr[i] = Math.pow(numArr[i], 2);
    else if (bonus === "T") numArr[i] = Math.pow(numArr[i], 3);
    if (!option) return;
    if (option === "*") {
      if (i === 0) numArr[i] *= 2;
      else {
        numArr[i - 1] *= 2;
        numArr[i] *= 2;
      }
    } else if (option === "#") {
      numArr[i] *= -1;
    }
  });
  const sum = numArr.reduce((prev, curr) => prev + curr);
  return sum;
}

solution("1D2S#10S");
