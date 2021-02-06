#Recursion examples

  #1) will equal 35.

  def sum(list):
     if len(list) == 1:
          return list[0]
     else:
          return list[0] + sum(list[1:])

  print(sum([5,3,8,12,1, 6]))
  
  
  #2) this will give you 10

  numbers = [1, 2, 3, 4, 5]
  print(sum(numbers))

# +++++++++++++++++++++++++++++++++++++++++

# currently when this code runs it doesn't know when to stop. It iterates over 900 times.
houses = ["Eric's house", "Kenny's house", "Kyle's house", "Stan's house"]

# Each function call represents an elf doing his work 
def deliver_presents_recursively(houses):
    # Worker elf doing his work
    if len(houses) == 1:
        house = houses[0]
        print("Delivering presents to", house)

    # Manager elf doing his work
    else:
        mid = len(houses) // 2
        first_half = houses[:mid]
        second_half = houses[mid:]

        # Divides his work among two elves
        deliver_presents_recursively(first_half)
        deliver_presents_recursively(second_half)
