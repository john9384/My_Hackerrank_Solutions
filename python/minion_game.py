def minion_game(string):
  vowels = 'AEIOU'

  kevin = 0
  stuart = 0
  for i in range(len(string)):
      if string[i] in vowels:
          kevin += (len(string)-i)
      else:
          stuart += (len(string)-i)

  if kevin > stuart:
      print("Kevin", kevin)
  elif kevin < stuart:
      print("Stuart", stuart)
  else:
      print("Draw")

#minion_game('BANANA')
strings = "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
print(len(strings))