from random import random

def flip_coin():
    if random() > 0.5:
        return "Heads"
    else:
        return "Tails"


def run_times(a):
    i = 0
    while i < a:
        print(flip_coin())
        i = i + 1

run_times(10)
