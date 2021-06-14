function matchingStrings(strings, queries) {
  // Write your code here
  const str_count = (arr, str) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == str) {
        count += 1;
      }
    }
    return count;
  };
  const arr_of_counts = queries.map((query) => str_count(strings, query));
  return arr_of_counts;
}

const result = matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
console.log(result);
