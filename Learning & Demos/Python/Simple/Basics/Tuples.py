# tuple -- ordered collection
# immutable
# faster than lists
# doesnt have to be unqiue
# can be used as a key - cannot use lists
# numbers = (1,2,4,5)
chars = ('a', 'b', 'c', 'd', 'e', 'f')
# chars[1]
locs = {
    (232232,2323232): 'New York Office',
    (232323,1212121): 'Alt Office'
}
print(locs[(232323,1212121)])
# x = tuple(y)

# looping
for char in chars:
    print(char)

#index
# first matching index
# if not found, will return error
print(chars.index('a'))
