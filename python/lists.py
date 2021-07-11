N = int(input("Input number of commmands to be inputed => "))
i = 0

arr = []
def lists_cmd(cmd_text):
    cmd = cmd_text.split(" ")
    ctx = cmd[0]
    if ctx == 'print':
      print(arr)
    elif ctx == 'append':
      arr.append(int(cmd[1]))
    elif ctx == 'remove':
      if int(cmd[1]) in arr:
        arr.remove(int(cmd[1]))
    elif ctx == 'pop':
      arr.pop()
    elif ctx == 'insert':
      arr.insert(int(cmd[1]), int(cmd[2]))
    elif ctx == 'sort':
      arr.sort()
    elif ctx == 'reverse':
      arr.reverse()
    
while i < N:
  lists_cmd(input("Input command with arguments => "))
  i += 1


# test = ["insert 0 5","insert 1 10","insert 0 6","print","remove 6","append 9","append 1","sort","print","pop","reverse","print"]
# for x in test:
#   lists_cmd(x)