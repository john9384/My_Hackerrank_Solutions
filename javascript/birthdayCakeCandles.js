function birthdayCakeCandles(ar) {
    const sorted_ar = ar.sort((a, b) => a - b)
    const no_of_tall = sorted_ar.filter((height) => height == sorted_ar[sorted_ar.length - 1]).length
    return no_of_tall

}
console.log(birthdayCakeCandles([3, 4, 5, 2, 5, 5, 4, 2, 1]))