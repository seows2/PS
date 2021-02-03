function solution(s) {
  const sArr = s.toLowerCase().split(" ");
  const answer = sArr
    .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
    .join(" ");
  return answer;
}
solution("3people unFollowed me");
