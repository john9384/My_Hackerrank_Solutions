N = int(input("Input number of nums to be hashed => "))
integer_list = map(int, input("Input numbers => ").split())
integer_tuple = tuple(list(integer_list))
print(integer_tuple)
print(hash(integer_tuple))