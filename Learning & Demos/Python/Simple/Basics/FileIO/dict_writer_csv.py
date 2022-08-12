from csv import DictWriter

with open("dogs2.csv", "w") as file:
    headers = ["Name", "Age", "Breed"]
    csv_writer = DictWriter(file, headers)
    csv_writer.writeheader()
    csv_writer.writerow({"Name": "Tank", "Age": 2, "Breed": "Pitbull"})
