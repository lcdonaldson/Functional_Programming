#Recursion examples

  #1) will equal 35.

  def sum(list):
     if len(list) == 1:
          return list[0]
     else:
          return list[0] + sum(list[1:])

  print(sum([5,3,8,12,1, 6]))
  
  
  #2) this will give you 10

  numbers = [1, 2, 3, 4]
  print(sum(numbers))
