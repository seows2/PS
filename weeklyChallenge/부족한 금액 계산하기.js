function solution(price, money, count) {
    const pricePerCount = Array.from({ length:count + 1 }, (_, idx) => price * idx);

    const totalPrice = pricePerCount.reduce((a, b) => a + b, 0);

    const reaminMoney = money - totalPrice;

    return reaminMoney > 0 ? 0 : Math.abs(reaminMoney);
}

console.log(solution(3, 20, 4));