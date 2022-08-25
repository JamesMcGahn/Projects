from cpod_scrape import ScrapeCpod
from dictionary import Dictionary
from keys import keys
from open_file import OpenFile
from session import Session
from write_file import WriteFile

# TODO: add CLI
# TODO: add option for scraping lessons dialogues, words, expansions
# TODO: add CLI option to download audio of words and/or sentences or dialogues
# TODO: filter by levels for example sentences
# TODO: allow for option to go back if there are sentences but the level selected filtered them out


def start(filepath):
    try:
        words_list = OpenFile.open_word_list(filepath, "\n")
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
            example_sentences = cpod.get_sentences()
            dictionary.add_word(defined_word)
            dictionary.add_sentences(example_sentences)

        WriteFile.write_to_csv(dictionary.get_words(), "words")
        WriteFile.write_to_csv(dictionary.get_sentences(), "ex_sentences")
    except ValueError as e:
        print(e)


start("./words.txt")
