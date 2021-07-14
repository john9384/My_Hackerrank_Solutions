# arr1 = [1, 2, 3]
# arr2 = ['one', 'two', 'three']
# result = zip(arr1, arr2)

# print(list(result))


S, N = input(), int(input()) 
for part in zip(*[iter(S)] * N):
    d = dict()
    print(''.join([ d.setdefault(c, c) for c in part if c not in d ]))