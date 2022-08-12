from csv import writer

with open("dogs.csv","w") as file:
    csv_writer= writer(file)
    csv_writer.writerow(["Name", "Age", "Breed"])
    csv_writer.writerow(["Tony",3,"Golden"])
    csv_writer.writerow(["Bob",2,"Lab"])
    csv_writer.writerow(["Chico",1,"Terrier"])