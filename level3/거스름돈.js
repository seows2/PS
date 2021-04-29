function solution(n, money) {
    const dp = Array(n + 1).fill(0);
    const coins = money.sort((a, b) => a - b);
    dp[0] = 1;
    for (const coin of coins) {
        for (let j = coin; j <= n; j++) {
            dp[j] += dp[j - coin];
        }
    }
    console.log(dp);
    return dp[n];
}

solution(5, [1, 2, 5])
//https://gurumee92.tistory.com/64

function change(n, coins) {
    var arrExp = [1];                               // arrExp[n] : n을 표현하는 방법의 수
    for (var i = 1; i <= n; i++) arrExp[i] = 0;     // arrExp 초기화
    coins.sort();                                   // 작은 동전부터 계산하도록 정렬
    for (var c in coins) {                          // 모든 동전에 대해 경우의 수 계산
        var coin = coins[c];                        // 경우의 수 계산할 동전 coin
        for (var i = coin; i <= n; i++) {
            arrExp[i] += arrExp[i - coin];          // (i - coin)을 표현하는 방법에 coin이 추가
        }
    }
    return arrExp[n];
}