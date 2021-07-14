def remove_dup(string):
  arr = []
  for x in string:
    if x not in arr:
      arr.append(x)
  return "".join(arr)

def merge_the_tools(string, k):
    # your code goes here
    factor = int(len(string)/k)
    start = 0
    stop = k
    for _ in range(factor):
      print(remove_dup(string[start:stop]))
      start+=k
      stop+=k

if __name__ == '__main__':
    #string, k = input("Input String => "), int(input("Input integer k => "))
    string, k = "AAABCADDE", 3
    merge_the_tools(string, k)
