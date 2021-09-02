def rotLeft(a, d):
  # Write your code here
  for i in range(d):
    a.append(a.pop(0))

  return a

print(rotLeft([1,2,3,4,5], 2))