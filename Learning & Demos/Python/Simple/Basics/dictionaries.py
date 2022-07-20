# Dictionary
# key value pairs

dog = {
    'name': 'bob',
    'age': 36,
}

print(dog['name'])

# looping
# values only

for x in dog.values():
    print(x)

# keys only
for x in dog.keys():
    print(x)

# BOTH
for x,y in dog.items():
    print(x,y)

# test key / value in dict
print("name" in dog)
print("bob" in dog.values())

# Dictionary Methods

# clear
# dog.clear()

# copy
clone = dog.copy()

# fromkeys
# {}.fromkeys(['name', 'score', 'email'])
# dict.fromkeys(['name', 'score', 'email'])
# sets keys with value of unknown by default, can pass second parm to set value

# get
# retrives value from key 
print(dog.get('name'))

# pop
# dog.pop('name')
# removes the key and returns value

# popitem
# pops random item

#update
#dog.update(clone)
# will update  dict with key values of another object
# will overwrite if same key is present in passed object

# dict comprehension
numbers2 = {
    'first': 1,
    'second': 2,
    'third': 3,
}

squard_numbers = {key: value ** 2 for key,value in numbers2.items()}
print(squard_numbers)