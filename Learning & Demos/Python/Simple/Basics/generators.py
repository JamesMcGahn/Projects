# generators vs fns
# - generators -- "yeild" instead of return
# - can yeild mulitple times
# when invoked it returns a generator where a fn returns a value
# generators are usually a better on memory


def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1


counter = count_up_to(5)

print(next(counter))
print(next(counter))


def current_beat():
    nums = (1, 2, 3, 4)
    i = 0
    while True:
        if i >= len(nums):
            i = 0
        yield nums[i]
        i += 1


counter2 = current_beat()
print(next(counter2))
print(next(counter2))
print(next(counter2))
print(next(counter2))
print(next(counter2))


# generator expressions

g = (num for num in range(1, 10))
print(next(g))
