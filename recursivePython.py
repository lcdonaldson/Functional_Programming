#Recursion examples

  #1) will equal 35.

  def sum(list):
     if len(list) == 1:
          return list[0]
     else:
          return list[0] + sum(list[1:])

  print(sum([5,3,8,12,1, 6]))
