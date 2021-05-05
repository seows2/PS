const GCD = (a, b) => {
    if (a % b === 0) return b;

    return GCD(b, a % b);
}
const getLCM = (arr) => {
    const lcm = (a, b) => {
        return a * b / GCD(a, b);
    }
    while (true) {
        arr.push(lcm(arr.pop(), arr.pop()));
        if (arr.length === 1) {
            return arr[0];
        }
    }
}

//최대 공약수
const num1 = 24;
const num2 = 18;
const gcd = GCD(num1, num2);
//최소 공배수
const lcm = getLCM([num1, num2])

// 3개 이상 최대 공약수
const num3 = 6;
const gcd3 = GCD(GCD(num1, num2), num3);

//3개 이상 최소 공배수
const lcm3 = getLCM([num1, num2, num3])
console.log(gcd, lcm, gcd3, lcm3);