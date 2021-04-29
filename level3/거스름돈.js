function solution(n, money) {
    const dp = Array(n + 1).fill(0);
    const coins = money.sort((a, b) => a - b);
    for (let i = 1; i <= n; i++) {
        if (i % coins[0] === 0) dp[i] = 1
    }
    for (let i = 1; i < coins.length; i++) {
        const coin = coins[i];
        for (let j = coin; j <= n; j++) {
            if (j === coin) dp[j] = dp[j] + 1 % 1000000007;
            else dp[j] = (dp[j] + dp[j - coin]) % 1000000007;
        }
    }
    console.log(dp[n]);
    return dp[n];
}

solution(5, [1, 2, 5])


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