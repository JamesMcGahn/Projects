from csv import reader, writer

# writing one file to another file
# approach 1 - not the most efficient approach as two files are open at the same time
# probably okay for slightly adjusting data as we do below
with open("fighters.csv") as file:
    csv_reader = reader(file)
    with open("uppercase_fighters.csv", "w") as file:
        csv_writer = writer(file)
        for fighter in csv_reader:
            csv_writer.writerow([col.upper() for col in fighter])

# approach 2 - save first file into list / var
with open("fighters2.csv") as file:
    csv_reader2 = reader(file)
    fighters = [[col.upper() for col in row] for row in csv_reader2]

with open("uppercase_fighters2.csv", "w") as file:
    csv_writer2 = writer(file)
    for fighter in fighters:
        csv_writer2.writerow(fighter)
