function CompareTheTriplets(arr1, arr2) {
  let aliceCount = 0;
  let bobCount = 0;
  for (let i = 0; i <= 3; i++) {
    if (i >= arr1.length || i >= arr2.length) break;
    if (arr1[i] == arr2[i]) continue;
    if (arr1[i] > arr2[i]) {
      aliceCount += 1;
    } else {
      bobCount += 1;
    }
  }
  return [aliceCount, bobCount];
}
console.log(
  CompareTheTriplets(
    [2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  )
);
