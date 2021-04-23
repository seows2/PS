function solution(n, t, m, timetable) {
    const getCrewTime = (timetable) => {
        const crewTime = [];
        timetable.forEach(e => {
            const [hour, minuten] = e.split(":");
            crewTime.push(hour * 3600 + minuten * 60);
        })
        return crewTime.sort();
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
    const busStart = 32400;
    const crewTime = getCrewTime(timetable);
    let lastTime = 0;
    let total = 0;
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        const nextBusTime = busStart + (i * t * 60);
        for (let j = 0; j < m; j++) {
            lastTime = nextBusTime;
            if (crewTime[j] <= nextBusTime) {
                cnt++;
                total++;
                lastTime = crewTime[j]
            }
        }
        crewTime.splice(0, cnt);
    }
    if (total < m) {
        return getTime(lastTime);
    }

    return crewTime.length ? getTime(lastTime) : getTime(lastTime - 60)

}

solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"])