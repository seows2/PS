function solution(enroll, referral, seller, amount) {
    const cost = amount.map(e => e * 100);
    const obj = {};
    cost.forEach((money, i) => {
        const sellerName = seller[i];
        let tempName = sellerName;
        let tempMoney = money;
        let up = Math.floor(money * 0.1);
        while (true) {
            tempMoney -= up;
            obj[tempName] = obj[tempName] ? obj[tempName] + tempMoney : tempMoney;
            tempMoney = up;
            up = Math.floor(tempMoney * 0.1);
            const idx = enroll.indexOf(tempName);
            tempName = referral[idx];
            if (tempName === "-") {
                break;
            }
        }
    })
    const answer = enroll.map(e => obj[e] ? obj[e] : 0);

    console.log(answer);
    return answer;
}

solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
)