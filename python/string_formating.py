def print_formatted(number):
  # your code goes here
  width = len("{0:b}".format(number))

  for i in range(1,number+1):
    print("{0:{width}d} {0:{width}o} {0:{width}X} {0:{width}b}".format(i, width=width))


if __name__ == '__main__':
    n = int(input("Input you number => "))
    print_formatted(n)

# n = int(input())
