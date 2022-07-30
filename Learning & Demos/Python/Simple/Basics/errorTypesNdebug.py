# -- Common errors

#syntax error 
# etc typo

#NameError 
# var is not definded

#TypeError
# operation or fn is applied to the wrong type
# py cant interpret an operation on two data types

# IndexError
# Occurs when you try to access an element in a list using an invalid index

#ValueError
# occurs when a built-in function operation or fn receives an argument that 
# has the right type but an inppropriate value

#KeyError
# occurs when a dict doesnt have a specific key

# AttributeError
# var does not have the attribute

# -- Raising Errors
# ex: raise NameError


# -- Handling Errors
try:
    print('hi')
except:
    print('problem')

try:
    print('enter a number')
except ValueError as err:
    print('this is not a number')
    print(err)
else: 
    print('will try if theres not a problem. it will run when except does not')
finally:
    print('runs no matter what')

# -- Debugging
# import pdb
# pdb.set_trace()

# Also commonly on one line:
# import pdb; pdb.set_trace()

# Common PDB Commands:
# l (list)
# n (next line)
# p (print)
# c (continue - finishes debugging)