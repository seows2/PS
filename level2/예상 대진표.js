function solution(n, a, b) {
  let aa = a;
  let bb = b;
  let answer = 0;
  while (aa != bb) {
    answer++;
    aa = Math.ceil(aa / 2);
    bb = Math.ceil(bb / 2);
  }
  console.log(answer);
}

solution(8, 4, 7);
