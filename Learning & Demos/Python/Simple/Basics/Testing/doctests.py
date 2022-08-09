# can write tests for fns in docstring
# must write code in format of REPL
# lacks many features of larger testing tools & tests can be brittle


def add(a, b):
    """
    >>> add(2,3)
    5
    >>> add(100,200)
    300
    """
    return a + b


# python3 -m doctest -v {filename}
