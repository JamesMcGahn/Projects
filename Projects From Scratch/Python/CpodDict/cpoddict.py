from csv import DictWriter

from cpod_scrape import ScrapeCpod
from dictionary import Dictionary
from keys import keys
from session import Session


def write_to_csv(data, filename):
    if len(data) == 0:
        print("No sentences are available. Try Selecting More Levels.")
        return None
    with open(f"{filename}.csv", "w") as file:
        csv_writer = DictWriter(file, fieldnames=data[0].keys())
        csv_writer.writeheader()
        for dat in data:
            print(dat)
            csv_writer.writerow(dat)


def open_word_list(filename):
    with open(filename) as file:
        words = file.read().split("\n")
    print(words)
    return words


def start(filename):
    print(keys["email"])
    words_list = open_word_list(filename)
    new_session = Session(
        f"{keys['url']}accounts/signin", keys["email"], keys["password"]
    )
    new_session.get_session()

    dictionary = Dictionary()

    levels = ("Elementary", "Pre-Intermediate", "Intermediate")
    for word in words_list:
        soup_res = new_session.get_html(
            f"{keys['url']}/dictionary/english-chinese/", word
        )
        cpod = ScrapeCpod(soup_res, word)
        defined_word = cpod.get_defintion()
        example_sentences = cpod.get_sentences(levels)
        dictionary.add_word(defined_word)
        dictionary.add_sentences(example_sentences)

    write_to_csv(dictionary.get_words(), "words1")
    write_to_csv(dictionary.get_sentences(), "sentences1")


start("./words.txt")
