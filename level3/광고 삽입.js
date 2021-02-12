function solution(play_time, adv_time, logs) {
  const stringToSecond = (time) => {
    const [Hour, Minute, Second] = time.split(":").map((e) => Number(e));
    const mil = Hour * 3600 + Minute * 60 + Second;
    return mil;
  };
  const secondToString = (second) => {
    const fixTwo = (num) => {
      if (num === 0) return "00";
      else if (num < 10) return `0${num}`;
      else return num;
    };
    let _temp = second;
    const sec = _temp % 60;
    _temp -= sec;
    _temp /= 60;
    const min = _temp % 60;
    _temp -= min;
    _temp /= 60;
    const hour = _temp;

    return `${fixTwo(hour)}:${fixTwo(min)}:${fixTwo(sec)}`;
  };

  const getAnswerSec = (arr, playSec, advSec) => {
    let maxViewer = 0;
    let result = 0;
    for (let i = 1; i < playSec; i++) {
      arr[i] += arr[i - 1];
    }

    for (let i = 0; i < advSec; i++) {
      maxViewer += arr[i];
    }
    let viewer = maxViewer;
    for (let i = advSec; i < playSec; i++) {
      viewer += arr[i] - arr[i - advSec];
      if (maxViewer < viewer) {
        maxViewer = viewer;
        result = i - advSec + 1;
      }
    }

    return result;
  };
  if (play_time === adv_time) return "00:00:00";
  const playSec = stringToSecond(play_time);
  const advSec = stringToSecond(adv_time);

  let arr = new Array(playSec + 1).fill(0);

  logs.forEach((log) => {
    const [startLog, endLog] = log.split("-");
    const start = stringToSecond(startLog);
    const end = stringToSecond(endLog);

    arr[start]++;
    arr[end]--;
  });

  const result = getAnswerSec(arr, playSec, advSec);
  const answer = secondToString(result);
  console.log(answer);
  return answer;
}

solution("02:03:55", "00:14:15", [
  "01:20:15-01:45:14",
  "00:40:31-01:00:00",
  "00:25:50-00:48:29",
  "01:30:59-01:53:29",
  "01:37:44-02:02:30",
]);
