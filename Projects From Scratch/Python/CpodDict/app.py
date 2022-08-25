from cpod_scrape import ScrapeCpod
from dictionary import Dictionary
from keys import keys
from mdgb_scrape import ScrapeMdgb
from open_file import OpenFile
from session import Session
from write_file import WriteFile

# TODO: add CLI
# TODO: add option for scraping lessons dialogues, words, expansions
# TODO: add CLI option to download audio of words and/or sentences or dialogues
# TODO: filter by levels for example sentences
# TODO: allow for option to go back if there are sentences but the level selected filtered them out
# TODO: handle case if definition of word is NONE for cpod or mdgb


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
            c_soup_res = new_session.get_html(
                f"{keys['url']}/dictionary/english-chinese/", word
            )
            cpod = ScrapeCpod(c_soup_res, word)
            c_defined_word = cpod.get_defintion()
            example_sentences = cpod.get_sentences()
            m_soup_res = new_session.get_html(
                "https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqtm=0&wdqcham=1&wdqt=",
                word,
            )
            mdgb = ScrapeMdgb(m_soup_res, word)
            m_defined_word = mdgb.get_defintion()
            m_defined_word.audio = c_defined_word.audio
            dictionary.add_word(m_defined_word)
            dictionary.add_sentences(example_sentences)

        WriteFile.write_to_csv(dictionary.get_words(), "words")
        # WriteFile.write_to_csv(dictionary.get_sentences(), "ex_sentences")
    except ValueError as e:
        print(e)


start("./words.txt")
