# functions

#defining fns
# def name_of_function():

def say_hi():
    print('hi')

say_hi()

def print_sq(a):
    return a**2

print(print_sq(2))


def generate_evens():
    return [x for x in range(1,50) if x % 2 == 0]

# default parameters
def exponent(num, power=2):
    return num ** power

# keyword parameters
# can alter order of parameters with keyword arguments
print(exponent(power=3,num=2))

# SCOPE

#variables created in fn's are fn scoped
# fns can not update global by default
# need to add global keyword
total = 0
def increase():
    global total
    total += 1
    return total

# to access parents vars from a nested fn you need to use nonlocal
def outer():
    count = 0
    def inner():
        nonlocal count
        count += 1
        return count
    return inner()

# docmentating fns with """ """
def speak():
    """prints hello"""
    print('hello')

print(speak.__doc__)

def return_day(day):
    day_of_week = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    if day > 7:
        return "None"
    return day_of_week[day-1] 

print(return_day(1))


# * args
#  gathers remaining arguments as a tuple
# doesnt have to be named *args, can be *whatever

def sum_all_nums(*args):
    total = 0
    for num in args:
        total += num
    return total

# **kwargs
# doesnt have to be named *kwargs, can be *whatever
# stores remaining arguments in a dict


# Parameter Ordering
# 1. parameters
# 2. *args
# 3. default parameters
# 4. **kwargs

# Tuple Unpacking with *
# nums = [1,23,4,5,6,6]
# sum_all_nums(*nums)
# unpacks list and passes each in separately

# dict unpacking with **
def display(first, second):
    print(f"{first} and {second}")

names = {"first": "bob", "second": "henry"}
display(**names)
# unpacks as first="bob" second=henry