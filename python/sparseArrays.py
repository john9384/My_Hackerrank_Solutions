def matchingStrings(strings, queries):
    # Write your code here
    def str_count(arr, text):
      count = 0
      for x in arr:
        if x == text:
          count+= 1
      return count
    arr_of_counts = map(lambda query: str_count(strings, query), queries)
    return list(arr_of_counts)

result = matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"])
print(result)