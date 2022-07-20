# sets
# no dups - must be unqiue
# cannot access by index

pears = set({1,2,3,4,5})
peaches = {1,2,3,4,5,6}

print(4 in pears) # True
print(7 in peaches) # False

for num in pears:
    print(num)

# removing dups from list
dups = [1,2,3,4,4,5,6,7,8,9,9]
print(set(dups))
no_dups = list(set(dups))
print(no_dups)

# add
pears.add(6)

# remove
pears.remove(3)
# will return error if not there
pears.discard(3)
# will not return error if not there

#copy
pears.copy()

# clear
# pears.clear()

#set unions
print(peaches | pears)

#set intersections
print(peaches & pears)

# set comprehension
ham = {x**2 for x in peaches}
print(ham)