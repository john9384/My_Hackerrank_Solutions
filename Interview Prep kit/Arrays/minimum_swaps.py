def minimumSwaps(arr): 
    swaps = 0

    getIndex = dict(zip(arr,range(1,len(arr)+1)))
    for i in range(1,len(arr)+1):
        if getIndex[i]!=i: 
            getIndex[arr[i-1]]=getIndex[i]
            arr[getIndex[i]-1]=arr[i-1]
            swaps+=1
    return swaps

minimumSwaps([1, 3, 5, 2, 4, 6, 7])