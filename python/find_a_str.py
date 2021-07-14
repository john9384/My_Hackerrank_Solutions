def count_substring(string, sub_string):
  count = 0
  for x in range(0,len(string)):
    seq = string[x:len(sub_string) + x]
    if seq == sub_string:
      count +=1
  
  return count

print(count_substring("ABCDCDC", 'CDC'))

