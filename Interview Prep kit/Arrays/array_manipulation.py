# def arrayManipulation(n, queries):
#     # Write your code here
#     init = [0 for x in range(n)]

#     for query in queries:
#       start = query[0] - 1
#       finish = query[1]
#       value = query[2]
#       for index in range(start, finish):
#         init[index] += value

#     print(max(init))
#     return max(init)


from collections import Counter

def arrayManipulation(n, queries):
    c = Counter()
    for a,b,k in queries:
      print(c[a], c[b])
      c[a]  +=k
      c[b+1]-=k
    arrSum = 0
    maxSum = 0
    for i in sorted(c)[:-1]:
        arrSum+= c[i]
        maxSum = max(maxSum,arrSum)
    print(maxSum)
    return maxSum

arrayManipulation(10, [[1,5,3], [4,8,7], [6,9,1]])


