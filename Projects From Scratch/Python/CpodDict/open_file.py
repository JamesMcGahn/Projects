import os
from csv import DictReader


class OpenFile:
    @staticmethod
    def check_file(filepath):
        if os.path.exists(filepath):
            return True
        else:
            print("Filepath does not exist")
            raise ValueError("Filepath does not exist")

    @staticmethod
    def open_csv(filepath):
        if OpenFile.check_file(filepath):
            with open(filepath, "r") as file:
                csv_reader = DictReader(file)
                return list(csv_reader)

    @staticmethod
    def open_word_list(filepath, split):
        if OpenFile.check_file(filepath):
            with open(filepath) as file:
                words = file.read().split(split)
                print(f"Word List: {words}")
                return words
