from dictionary import Dictionary, Word
from open_file import OpenFile
from write_file import WriteFile

filepath = input("Where is the file located?: ")
while not WriteFile.path_exists(filepath, False):
    filepath = input("File path doesn't exist. Try again: ")
file_list = OpenFile.open_file(filepath, True)

dictionary = Dictionary()
id = 0
for x in file_list:
    if x["chinese"] and x["definition"] and x["pinyin"]:
        word = Word(x["chinese"], x["definition"], x["pinyin"], "")
        word.id = int(x["id"])
        id = int(x["id"])
        print(id)
        dictionary.masterdict.append(word)

dictionary.word_id = id
dictionary.save_dictionary()
