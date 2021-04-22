function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/g, "a")
    .substr(0, 15).replace(/\.$/g, "")

  return answer.padEnd(3, answer[answer.length - 1])

}

solution("z-+.^.");
