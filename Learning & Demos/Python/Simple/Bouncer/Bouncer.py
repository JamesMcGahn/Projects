age = input("How old are you:  ")
if age:
    age = int(age)
    if age >= 21:
        print('you can drink')
    elif  age >= 18:
        print('you need a wristband')
    else:
        print('you gotta go')
else:
    print('enter a valid age')