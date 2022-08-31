import os
import pickle
from csv import DictReader


class OpenFile:
    @staticmethod
    def check_file(filepath):
        if os.path.exists(filepath):
            return True
        else:
            print("Filepath does not exist")
            raise ValueError("Filepath does not exist")

    def open_pickle(path):
        if OpenFile.check_file(path):
            with open(path, "rb") as infile:
                dill = pickle.load(infile)
            return dill

    @staticmethod
    def open_file(filepath, csv=False, split=False):
        print(f"Opening {filepath}")
        if OpenFile.check_file(filepath):
            with open(filepath, "r") as file:
                if csv:
                    csv_reader = DictReader(file)
                    return list(csv_reader)
                elif split:
                    data = file.read().split(split)
                    print(f"List: {data}")
                    return data
                else:
                    return file
