import pickle

# dog = ["big", "small", "medium", "tiny"]

# -- write pickling
# with open("dog.pickle", "wb") as file:
#     pickle.dump(dog, file)

# -- read pickling
with open("dog.pickle", "rb") as file:
    can_opener = pickle.load(file)
    print(can_opener)
