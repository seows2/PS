/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5 8", "100 99 60 80 30 20 10 89 99 100"];

function solution(input) {
    const isFinish = (durabilities) => {
        let cnt = 0;
        durabilities.forEach(durability => {
            if (durability === 0) cnt++;
        })
        if (cnt >= K) return true;
        else return false;
    }
    const moveBelt = (durability, N) => {
        robotPos[N - 1] = false;
        durability.splice(0, 0, durability.pop());
        robotPos.splice(0, 0, robotPos.pop());
        robotPos[N - 1] = false;
        return;
    }
    const moveRobot = (durability, robotPos, N) => {
        for (let i = N; i >= 0; i--) {
            const curRobot = robotPos[i];
            if (curRobot && !robotPos[i + 1] && i < N && durability[i + 1] >= 1) {
                robotPos[i] = false;
                robotPos[i + 1] = true;
                durability[i + 1]--;
            }
        }
        return;
    }
    const [N, K] = input[0].split(" ").map(e => Number(e));
    let durability = input[1].split(" ").map(e => Number(e));
    let robotPos = Array(2 * N).fill(false);
    let count = 0;
    while (!isFinish(durability)) {
        count++;
        moveBelt(durability, N);
        moveRobot(durability, robotPos, N);
        if (durability[0] > 0) {
            robotPos[0] = true;
            durability[0]--;
        }
        //console.log(robotPos);
    }
    console.log(count);
}

solution(input);
