function solution(n, t, m, timetable) {
    const getCrewTime = (timetable) => {
        const crewTime = [];
        for (const time of timetable) {
            const [hour, minuten] = time.split(":");
            crewTime.push(hour * 3600 + minuten * 60);
        }
        return crewTime.sort((a, b) => a - b);
    }
    const getTime = (mil) => {
        let hour = Math.floor(mil / 3600);
        mil -= hour * 3600;
        let sec = Math.floor(mil / 60);
        if (sec < 10) {
            sec = `0${sec}`
        }
        if (hour < 10) {
            hour = `0${hour}`
        }
        return `${hour}:${sec}`;
    }
    const BUS_START = 32400;
    const BUS_INTERVAL = t * 60;


    const busTable = Array.from({ length: n }, (_, i) => BUS_START + (i * BUS_INTERVAL));
    const numberOfBus = busTable.length;
    const crewTime = getCrewTime(timetable);
    let cnt = 0;
    let answer = 0;

    for (const busTime of busTable) {
        cnt++;
        const onBoard = crewTime.filter(time => time <= busTime);
        const onBoardLength = onBoard.length;
        if (onBoardLength > m) crewTime.splice(0, m);
        else crewTime.splice(0, onBoardLength);

        if (cnt === numberOfBus && onBoardLength >= m) {
            onBoard.splice(m);
            const maxTime = Math.max(...onBoard);
            answer = getTime(maxTime - 60);
            console.log("1", answer);
            return answer;
        }
        if (cnt === numberOfBus && onBoardLength < m) {
            answer = getTime(busTime);
            console.log("2", answer);
            return answer;
        }
    }
    answer = getTime(busTable[busTable.length - 1]);
    console.log("3", answer);
    return answer
}

solution(2, 10, 2, ["09:10", "09:09", "09:09", "08:00"])