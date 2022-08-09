# if py file is run with -O optimized flag, assertions will be skipped


def add_positive(x, y):
    assert x > 0 and y > 0, "Both numbers must be positive"
    return x + y


# print(add_positive(1, 1))  # 2
# print(add_positive(1, -1))  # "Both numbers must be positive"


def junk_food(food):
    assert food in [
        "chips",
        "ice cream",
        "pizza",
    ], "Food must be a junk food"
    return f"getting fat {food}"


print(junk_food("pizza"))
print(junk_food("ham"))
