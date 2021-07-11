if __name__ == '__main__':
    n = int(input("Input total number of participants => "))
    arr = map(int, input("Input the points with space => ").split())
    result = list(arr)
    arr_without_first = list(filter(lambda x: x < max(result), result))

    print(max(arr_without_first))