# def solve(s):
#   first, last = s.split(' ')
#   return "{0} {1}".format(first.capitalize(), last.capitalize())

def solve(s):
  for x in s[:].split():
    s = s.replace(x, x.capitalize())



print(solve("alison heck"))