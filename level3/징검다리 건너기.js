function solution(stones, k) {
    const check = (stones, k, mid) => {
        let cnt = 0;
        for (const stoneCnt of stones) {
            if (stoneCnt < mid) {
                cnt++;
                if (cnt >= k) return false;
            } else {
                cnt = 0;
            }
        }
        return true;
    }
    let answer = 0;

    let right = 200000000;
    let left = 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (check(stones, k, mid)) {
            left = mid + 1;
            if (answer < mid) {
                answer = mid;
            }
        } else {
            right = mid - 1;
        }
    }
    //console.log(answer);
    return answer;
}
solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)