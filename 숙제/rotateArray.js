const leftRotateArr = (arr, time) => {
    const temp = arr[0];
    let i = 0
    for (i = 0; i < time - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[i] = temp;
    console.log(arr);
}
const GCD = (a, b) => {
    if (a % b === 0) return b;

    return GCD(b, a % b);
}

const leftRotateArrJuggling = (arr, time, n) => {
    for (let i = 0; i < GCD(n, time); i++) {
        const temp = arr[i];
        let j = i;
        while (true) {
            let k = j + time;
            if (k >= n) k = k - n;

            if (k === i) break;

            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
    console.log(arr);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
//leftRotateArr(arr, 2)
leftRotateArrJuggling(arr, 2, arr.length)