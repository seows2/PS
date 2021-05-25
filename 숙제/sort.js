/**
 * 거품 정렬
 * 
 * 시간 복잡도 O(N^2)
 * 공간 복잡도 O(N)
 * 안정 정렬
 */
const bubbleSort = (arr) => {
    const swap = (a, b) => {
        [sortedArr[a], sortedArr[b]] = [sortedArr[b], sortedArr[a]]
    }
    const sortedArr = arr.slice();

    for (let i = 0; i < sortedArr.length; i++) {         // 제외할 원소 갯수
        for (let j = 1; j < sortedArr.length - i; j++) { // 원소를 비교할 반복문
            if (sortedArr[j - 1] > sortedArr[j]) {       // 원소 비교
                swap(j - 1, j)
            }
        }
    }
    //console.log(sortedArr);
}
/**
 * 선택 정렬
 * 
 * 시간 복잡도 O(N^2)
 * 공간 복잡도 O(N)
 * 불안정 정렬
 */
const selectionSort = (arr) => {
    const swap = (a, b) => {
        [sortedArr[a], sortedArr[b]] = [sortedArr[b], sortedArr[a]]
    }
    const sortedArr = arr.slice();

    for (let i = 0; i < sortedArr.length - 1; i++) {        // 1
        let indexMin = i;
        for (let j = i + 1; j < sortedArr.length; j++) {    // 2
            if (sortedArr[j] < sortedArr[indexMin]) {       // 3
                indexMin = j;
            }
        }
        swap(indexMin, i);                                  // 4
    }
    //console.log(sortedArr);
}

const insertionSort = (arr) => {
    const sortedArr = arr.slice();

    for (let i = 1; i < sortedArr.length; i++) {            // 1
        let temp = sortedArr[i];
        let prev = i - 1;
        while ((prev >= 0) && (sortedArr[prev] > temp)) {   // 2
            sortedArr[prev + 1] = sortedArr[prev];
            prev--;
        }
        sortedArr[prev + 1] = temp;                         // 3
    }
    //console.log(sortedArr);
}

const quickSort = (arr, left, right) => {
    const swap = (a, b) => {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }
    const partition = (sortedArr, left, right) => {
        const pivot = sortedArr[left];
        let i = left;
        let j = right;

        while (i < j) {
            while (pivot < sortedArr[j]) {
                j--;
            }
            while (i < j && pivot >= sortedArr[i]) {
                i++;
            }
            swap(i, j);
        }
        sortedArr[left] = sortedArr[i];
        sortedArr[i] = pivot

        return i;
    }

    if (left >= right) return;

    const pivot = partition(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
}

const mergeSort = (arr, left, right) => {
    const merge = (arr, left, mid, right) => {
        const L = arr.slice(left, mid + 1);
        const R = arr.slice(mid + 1, right + 1);

        let i = 0;
        let j = 0;
        let k = left;
        const ll = L.length;
        const rl = R.length;

        while (i < ll && j < rl) {
            if (L[i] <= R[j]) {
                arr[k] = L[i++];
            } else {
                arr[k] = R[j++];
            }
            k++;
        }

        while (i < ll) {
            arr[k++] = L[i++];
        }
        while (j < rl) {
            arr[k++] = R[j++];
        }
    }

    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

const arr = [3, 44, 38, 5, 47, 15, 36]
bubbleSort(arr);
selectionSort(arr);
insertionSort(arr);
//quickSort(arr, 0, arr.length - 1);
mergeSort(arr, 0, arr.length - 1)
console.log(arr);