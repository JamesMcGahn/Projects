import os
from csv import DictWriter


class WriteFile:
    @staticmethod
    def path_exists(path, makepath):
        if os.path.exists(path):
            return True
        elif not os.path.exists(path) and makepath:
            os.makedirs(path)
            return True
        else:
            return False

    @staticmethod
    def write_to_csv(data, filename):
        if len(data) == 0:
            return False
        # if folder path doesnt exist - create it
        WriteFile.path_exists("./out", True)
        # remove linux illegal characters
        filename = filename.replace("/", "-").replace("\0", "")
        path = f"./out/{filename}.csv"
        # check if filename exists
        if WriteFile.path_exists(path, False):
            count = 1
            newpath = f"./out/{filename}-({count}).csv"
            # if filename exists append -(count) to make unique filename
            # check to see if filename already exists - if it does increase count in filename
            while WriteFile.path_exists(newpath, False):
                print(WriteFile.path_exists(newpath, False))
                newpath = f"./out/{filename}-({count}).csv"
                count += 1
            path = newpath
        with open(path, "w") as file:
            csv_writer = DictWriter(file, fieldnames=data[0].keys())
            csv_writer.writeheader()
            for dat in data:
                csv_writer.writerow(dat)
