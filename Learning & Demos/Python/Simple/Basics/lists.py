# len
# length of list
demoList = ['ham', 'cheese', 'corners']
print(len(demoList))

# built in fn to make lists
tasks = list(range(1,5))
print(tasks)

#accessing data 
print(tasks[1])

# value in list
print(3 in tasks)

# for loop
for num in tasks:
    print(num)

# while loop
i = 0
while i <  len(tasks):
    print(tasks[i])
    i += 1

example = ["cheese", "turkey", "ham"]
# List Methods

# append - adds single item to end of list
example.append('popcorn')
print(example)

# extend - adds multi items to end of list
example.extend(['salami', 'milk'])
print(example)

# insert
example.insert(1, "meat")
print(example)

# clear - removes everything from the lists
# example.clear()
# pop - last item by default if index is not passed
delItem = example.pop()
# example.pop(0)
print(example)
print(delItem)

#remove - remove the first item whos value is X
# throws error if cant find item
delItem2 = example.remove("salami")
print(example)

# index -- returns index of a item
# can specify start and end
print(example.index('popcorn', 1))
print(example.index('popcorn', 1, 5))

# count - returns number of times item is in a list
print(example.count('popcorn'))

# reverse - reverse order of list
example2 = [1,2,3,4]
example2.reverse()
print(example2)

# sort - sorts items in list -- will touch on later

# join - joins lists into strings
words = ['hi',"bob",'handson']
greeting = " ".join(words)
print(greeting)

# slice - list[start:end:step]
# dont need to include start but need :
# list[0:] - copy of list
# negative numbers as end -- how many items from the item to include
# step is the number to count at a time like step with range
# negative is reverse order
# easy way to reverse -- name[::-1]
example3 = example[0:]
print(example3)


# list comprehension
# for loop in a single line 
# [x*10 for x in nums]
listcom = [num*10 for num in range(1,5)]
nums2 = [10, 20, 40, 60]
listcom2 = [x/2 for x in nums2]
print(listcom)
print(listcom2)

# LC with Conditional Logic
numbers = [1,2,3,4,5,6,7,8,9,10]
evens = [num for num in numbers if num % 2 ==0]
odds = [num for num in numbers if num % 2 !=0]
print(evens)
print(odds)


# Nested Lists
# example = [[1,2,3],[4,5,6]]
# example[0][1]

# Nested List Comprehension
nested = [[1,2,3],[4,5,6],[7,8,9]]
[[print(val) for val in x] for x in nested]