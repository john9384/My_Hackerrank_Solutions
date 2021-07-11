
# Init solution
# def wrap(string, max_width):
#   div_count = int(len(string)/max_width)

#   div_count = None
#   if(len(string)%max_width != 0):
#      div_count = int(len(string)/max_width)
#   else:
#      div_count = int(len(string)/max_width) + 1
  
#   start = 0
#   stop = max_width
#   arr = []
#   for i in range(div_count):
#     arr.append(string[start:stop])
#     start+=max_width
#     stop+=max_width

#   return "\n".join(arr)

import textwrap

def wrap(string, max_width):
    wrapper = textwrap.TextWrapper(width=max_width)
    word_list = wrapper.wrap(text=string)
    
    return "\n".join(word_list)

if __name__ == '__main__':
    string, max_width = input("Enter String"), int(input("Enter max_width"))
    result = wrap(string, max_width)
    print(result)