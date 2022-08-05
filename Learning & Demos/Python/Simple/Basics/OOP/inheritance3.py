class GrumpyDict(dict):
    def __repr__(self):
        print("None of your business")
        return super().__repr__()

    def __missing__(self, key):
        print(f"you want {key} but its not here")

    def __setitem__(self, key, value):
        print("You want to change something?!")
        print("fine....")
        super().__setitem__(key, value)


data = GrumpyDict({"first": "Frank", "last": "Bob", "Favorite": "Skiing"})
print(data)
data["dog"]
data["food"] = "pizza"
print(data)
