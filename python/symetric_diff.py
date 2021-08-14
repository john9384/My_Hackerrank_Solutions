def symetric_diff(arr1, arr2):
  set_one = set(arr1)
  set_two = set(arr2)
  intersepts = list(set_one.intersection(set_two))

  for x in intersepts:
    set_one.remove(x)
    set_two.remove(x)
  
  union_of_diff = sorted([int(n) for n in list(set_one.union(set_two))])
  for y in union_of_diff:
    print(y)


symetric_diff([2, 4, 5, 9], [2, 4, 11, 12])