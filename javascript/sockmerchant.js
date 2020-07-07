function countPairs(n, arr) {
    let sorted = arr.sort((a, b) => a - b);
    let pairs = 0;
    console.log(sorted);
    for (let i = 0; i < n - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}
let ar = [3, 5, 3, 10, 4, 10, 5]
console.log(countPairs(7, ar));