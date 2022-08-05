# Polymorphism
# an object can take on many (poly) forms (morph)

# 1. The same method works in a similar way for different classes


class Animal:
    def speak(self):
        raise NotImplementedError("Subclass needs to implement this method")


class Dog(Animal):
    def speak(self):
        return "woof"


class Cat(Animal):
    def speak(self):
        return "meow"


class Fish(Animal):
    pass


# d = Dog()
# print(d.speak())  # woof
# f = Fish()
# print(f.speak())  # error

# 2. The same operation works for different kinds of objects

# trunk-ignore(flake8/E402)
from copy import copy


class Human:
    def __init__(self, first, last, age):
        self.first = first
        self.last = last
        self.age = age

    def __repr__(self):
        return f"Human named {self.first} {self.last}"

    def __len__(self):
        return self.age

    def __add__(self, other):
        if isinstance(other, Human):
            return Human(first="Newborn", last=self.last, age=0)
        return "You cannot add that"

    def __mul__(self, other):
        if isinstance(other, int):
            return [copy(self) for i in range(other)]
        return "You dont have access to cloning humans"


j = Human("Jen", "Smith", 34)
k = Human("Ken", "Scott", 45)

print(j + k)
print(j * 3)

triplets = j * 3
triplets[0].first = "Bob"
print(triplets)
