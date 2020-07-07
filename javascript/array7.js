function printReverse(N, [...arr]) {
    let newArr = [];
    for (let i = N - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "))
}
printReverse(6, [1, 2, 3, 4, 5, 6]);