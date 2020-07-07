function diagonalDifference(arr) {
    // Write your code here
    let diagonal1 = [];
    let diagonal2 = []
    for (let i = 0; i < arr.length; i++) {

        diagonal1.push(arr[i][i]);
    }
    for (let i = 0; i < arr.length; i++) {
        let j = arr.length - 1 - i
        diagonal2.push(arr[i][j])
    }
    let pry_diagonal = diagonal1.reduce((total, num) => { return total + num; }, 0)
    let sec_diagonal = diagonal2.reduce((total, num) => { return total + num; }, 0)

    return pry_diagonal - sec_diagonal

}

console.log(diagonalDifference([
    [3, 4, 5],
    [4, 5, 1],
    [1, 3, 4]
]))