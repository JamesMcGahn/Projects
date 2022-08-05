class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def __repr__(self):
        return f"{self.name} is a {self.species}"

    def make_sounds(self, sound):
        print(f"this animal says {sound}")


class Cat(Animal):
    def __init__(self, name, breed, toy):
        # Animal.__init__(name, species) - self is already passed in
        # okay to init like the above
        # but easier to use super()

        super().__init__(name, species="Cat")
        self.breed = breed
        self.toy = toy

    def play(self):
        print(f"{self.name} plays with {self.toy}")


bob = Cat("bob", "black cat", "ball")
bob.make_sounds("Meow")


print(isinstance(bob, Animal))
print(isinstance(bob, Cat))
bob.play()
