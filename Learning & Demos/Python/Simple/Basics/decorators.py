def be_polite(fn):
    def wrapper():
        print("nice to meet you")
        fn()
        print("see ya")

    return wrapper


@be_polite  # = greets = be_polite(greet)
def greet():
    print("my name is bob")


@be_polite  # = polite_rage = be_polite(rage)
def rage():
    print("i hate you")


# adding decorators syntax sugar wrap the fn and removes having to define the below
# greets = be_polite(greet)
# polite_rage = be_polite(rage)
# polite_rage()
# greets()

greet()
rage()

## decorators patterns
def shout(fn):
    def wrapper(
        *args, **kwargs
    ):  # gives the us the most flexibility to pass whatever through
        return fn(*args, **kwargs).upper()

    return wrapper


@shout
def greet(name):
    return f"hi, i am {name}"


@shout
def order(main, side):
    return f"hi i am {main} , with a {side}"


@shout
def haha():
    return "haha"


print(greet("frank"))
print(order("burger", "shake"))
print(haha())
