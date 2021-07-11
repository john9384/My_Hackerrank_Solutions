
arr = []

for _ in range(int(input("Input number of data => "))):
  name = input("Input name => ")
  score = float(input("Input score => "))
  arr.append([name,score])

grades=[x[1] for x in arr]
sec_min_grade = min(list(filter(lambda x: x > min(grades), grades)))
stud_with_grade = sorted([x[0] for x in arr if x[1] == sec_min_grade])

for student in stud_with_grade:
  print(student)

# 5
test = [['Harry',37.21],['Berry',37.21],['Tina',37.2],['Akriti',41],['Harsh',39]]
