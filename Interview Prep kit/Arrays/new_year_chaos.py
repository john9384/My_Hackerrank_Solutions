def minimumBribes(q):
    moves_count = 0 
    q = [x-1 for x in q]
    for i,x in enumerate(q):
        if x - i > 2:
            print("Too chaotic")
            return
        for j in range(max(x-1,0),i):
            if q[j] > x:
                moves_count += 1
    print(moves_count)


minimumBribes([2, 1, 5, 3, 4])