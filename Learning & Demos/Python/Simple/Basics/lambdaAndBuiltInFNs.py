#lambda fns
#nameless fn - like anonymous fn in JS

square2 = lambda num: num * num

# Map
# two args list and fn
# puts in a map object - can only be iterated over once
# can easily just put in a list
nums = [1,2,3,4,5,6,7,8]
doubles = map(lambda x: x**2,nums)
print(list(doubles))


#filter
# two args list and fn
# puts in a filter object - can only be iterated over once
# can easily just put in a list
names = ['andrew','bob','henry','charles', 'angel']
a_names = filter(lambda x: x[0] == 'a',names)
print(list(a_names))


# all
# return True if all elements of the iterable are truthy or if empty

print(all([0,1,2,3,4])) # False
print(all([names[0]=='a' for names in names])) #False

# generator expression
print(all(names[0]=='a' for names in names)) #False

# any
# return True if any elements of the iterable are truthy or if empty
print(any([names[0]=='a' for names in names])) #True
# generator expression
print(any(names[0]=='a' for names in names))


#sorted
# returns sorted list from items in iterable
# can pass in lists, tuples, sets
# vs. sort - sort only works on lists and alters the original
print(sorted([6,4,3,2,1,35,6,1]))
print(sorted((6,4,3,2,1,35,6,1)))
print(sorted({6,4,3,2,1,35,6,1}, reverse=True))

users = [
	{"username": "bob", "tweets": ["I love cheese", "I love ham", "hello world!"]},
	{"username": "kate", "tweets": ["I love my fish"]},
	{"username": "john", "tweets": [], "color": "black"},
	{"username": "bigbob", "tweets": [], "num": 10, "color": "blue"},
	{"username": "dogman", "tweets": ["dogs", "I'm hungry dog man"]},
	{"username": "turkey", "tweets": []}
]

# To sort users by their username
sorted(users,key=lambda user: user['username'])

#max & min

max([3,4,5,6,6,7,4,10])
min([3,4,5,6,6,7,4,10])

print(min(len(name)for name in names)) #3
print(max(names, key=lambda name:len(name))) #charles
print(max(users, key=lambda user:len(user['tweets']))) #most tweets

# reversed
# returns a reverseiterator
for x in reversed(range(0,10)):
	print(x)

# len
# returns length of list, string, tuple etc

# abs
# find the absolute value
abs(-23) # 23

#sum
# takes an iterable and an optional start
# default start is 0
print(sum([3,4,5,6,6,7,4,10]))
print(sum([3,4,5,6,7],10))

# round
# return rounded number to ndigits precision
# default is to round to the nearest integer
print(round(10.2)) #10
print(round(10.221212,2)) #10.22

# zip
# returns an iterator of tuples where the nth tuple nth element of the argument sequence

zippy = zip([1,2,3],[4,5,6])
zippy2 = zip([1,2,3],[4,5,6])
print(list(zippy)) # [(1, 4), (2, 5), (3, 6)]
print(dict(zippy2)) #{1: 4, 2: 5, 3: 6}


midterms = [80,91,78]
finals = [98,89,53]
students = ['rob', 'taco', 'steve']


# returns dict with {student:highest score} 
# {'rob': 98, 'taco': 91, 'steve': 78}
final_grades = {t[0]:max(t[1], t[2]) for t in zip(students, midterms, finals)}

#using map and lambda
final_grades2 = dict(
	zip(
		students,
		map(
			lambda pair: max(pair),
			zip(midterms, finals)
		)
	)
)

print(final_grades2) #{'rob': 98, 'taco': 91, 'steve': 78}