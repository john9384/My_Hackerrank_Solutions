def mutate_string(string, position, character):
    arr = list(string)
    arr[position] = character
    
    return "".join(arr)

print(mutate_string("Hellothere", 5, "w"))