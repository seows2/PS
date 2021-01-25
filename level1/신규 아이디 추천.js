function solution(new_id) {
  const level1 = new_id.toLowerCase();
  const level2 = [...level1]
    .map((e) => {
      const small = /[a-z]/;
      const num = /[0-9]/;
      if (small.test(e) || num.test(e) || e === "-" || e === "_" || e === ".")
        return e;
    })
    .join("");
  const colReg = /\.+/g;
  const level3 = level2.replace(colReg, ".");

  const makeLevel4 = (string) => {
    let temp = [...string];
    if (temp[0] === ".") temp.shift();
    if (temp[temp.length - 1] === ".") temp.pop();
    return temp.join("");
  };
  const level4 = makeLevel4(level3);
  const level5 = level4.length === 0 ? "a" : level4;

  const makeLevel6 = (string) => {
    let temp = [...string];
    const diff = 15 - temp.length;
    if (diff < 0) {
      temp.splice(temp.length - Math.abs(diff), Math.abs(diff));
    }
    temp = makeLevel4(temp);
    return temp;
  };
  const level6 = makeLevel6(level5);
  const diff = level6.length - 3;
  const level7 =
    diff < 0
      ? level6 + level6[level6.length - 1].repeat(Math.abs(diff))
      : level6;

  return level7;
}

solution("z-+.^.");
