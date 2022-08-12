from csv import DictReader, reader

with open("fighters.csv", "r") as file:
    csv_reader = reader(file, delimiter=",")  # gives an iterator
    next(csv_reader)
    for fighter in csv_reader:
        print(f"{fighter[0]} is from {fighter[1]}")


with open("fighters.csv", "r") as file:
    csv_reader = reader(file, delimiter=",")
    data = list(csv_reader)
    for fighter in data:
        print(f"{fighter[0]} is from {fighter[1]}")


with open("fighters.csv") as file:
    csv_reader = DictReader(file)

    for fighter in csv_reader:
        print(fighter["Name"])
