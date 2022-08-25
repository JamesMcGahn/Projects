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
    def check_dup(folderpath, filename, ext):
        # if folder path doesnt exist - create it
        WriteFile.path_exists(folderpath, True)
        # remove linux illegal characters
        if isinstance(filename, int):
            filename = str(filename)
        filename = filename.replace("/", "-").replace("\0", "")
        path = f"{folderpath}/{filename}{ext}"
        # check if filename exists
        if WriteFile.path_exists(path, False):
            count = 1
            newpath = f"{folderpath}/{filename}-({count}){ext}"
            # if filename exists append -(count) to make unique filename
            # check to see if filename already exists - if it does increase count in filename
            while WriteFile.path_exists(newpath, False):
                print(WriteFile.path_exists(newpath, False))
                newpath = f"{folderpath}/{filename}-({count}){ext}"
                count += 1
            path = newpath
        return path

    @staticmethod
    def write_to_csv(data, filename):
        if len(data) == 0:
            return False
        path = WriteFile.check_dup("./out", filename, ".csv")
        with open(path, "w") as file:
            csv_writer = DictWriter(file, fieldnames=data[0].keys())
            csv_writer.writeheader()
            for dat in data:
                csv_writer.writerow(dat)
