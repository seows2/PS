/*
문제 설명

괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
()() 또는 (())() 는 올바른 괄호입니다.
)()( 또는 (()( 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
입출력 예
s	    answer
()()	true
(())()	true
)()(	false
(()(	false
입출력 예 설명
입출력 예 #1,2,3,4
문제의 예시와 같습니다.
*/

function solution(s) {
  // 스트링의 길이가 2 이하일때 false
  if (s.length < 2) {
    return false;
  }
  const lastWord = s.charAt(s.length - 1);
  const firstWord = s.charAt(0);
  // 스트링 첫 글자가 ), 마지막 글자가 (이면 false
  if (lastWord === "(" || firstWord === ")") {
    return false;
  }
  //스트링이 짝수가 아니면 false
  if (s.length % 2 !== 0) {
    return false;
  }
  let right = 0; // )
  let left = 0; // (
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      right++;
    } else {
      left++;
    }
    if (right > left) {
      return false;
    }
  }
  return true;
}

function solution2(s) {
  let stack = [];
  let arrayStr = [...s];
  arrayStr.forEach((element) => {
    if (element === "(") {
      stack.push(element);
    } else if (stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(element);
    }
  });
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution2("())(()"));
