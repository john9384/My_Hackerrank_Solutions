function miniMaxSum(arr) {
    const sum_arr = []
    for (let i = 0; i < arr.length; i++) {
        let rem_sum = arr.filter((num) => num != arr[i]).reduce((total, num) => total + num, 0);
        if (rem_sum == 0) {
            if (i > 0) {
                sum_arr.push(arr.splice(i).reduce((total, num) => total + num, 0))
            }

        } else {
            sum_arr.push(rem_sum);
        }
    }
    console.log(sum_arr)
    const sorted_sum_arr = sum_arr.sort((a, b) => a - b);
    const max = sorted_sum_arr[sorted_sum_arr.length - 1];
    const min = sorted_sum_arr[0]
    console.log(`${min} ${max}`)
}

miniMaxSum([5, 5, 5, 5, 5]);

function checkSimiliarity() {

}