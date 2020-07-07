function plusMinus(arr) {
    const pos_num = arr.filter((num) => num > 0).length
    const neg_num = arr.filter((num) => num < 0).length
    const zero_num = arr.filter((num) => num == 0).length
    const arr_len = arr.length
    console.log(`${(pos_num / arr_len).toFixed(6) }
${(neg_num / arr_len).toFixed(6) }
${(zero_num/arr_len).toFixed(6)}`)

}
plusMinus([-1, -1, 0, 1, 1, 1])