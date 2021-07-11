if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    
    per = lambda arr: float(sum(arr)/3)
    avg = per(student_marks[query_name])
    
    print(format(avg, ".2f"))