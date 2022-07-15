# for Loops
# - for itm in collection:

from re import X


for x in range(0,10):
    print(x)

# ranges
# range(0,7) 0 to 7 not including 7
# range(10) 0 to 10 not including 10
# range(1,10,2) odds from 1 - 10 
# range(7,0,-1) 7 to 1 not including zero

x = 0
for y in range(11,21,2):
    print(y)
    x += y

print(x)

# while loops
# while {condition}:
#   

# break
# break word to loop 
# works in for and while


msg = input("what the pwd")
while msg != "banana":
    print('nope not it')
    msg = input("what the pwd")
print('you got it')


for num in range(1,11):
    print("\U0001f600" * num)

times = 11
while times > 0:
    print("\U0001f600" * times)
    times -= 1