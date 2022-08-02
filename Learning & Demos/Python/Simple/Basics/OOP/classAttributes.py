class Pet:
    allowed = ["cat", "dog", "fish", "rat"]

    def __init__(self, name, species):
        if species not in Pet.allowed:
            raise ValueError(f"You can't have a {species} in pet")
        self.name = name
        self.species = species


cat = Pet("Splinter", "cat")
dog = Pet("Nacho", "dog")
