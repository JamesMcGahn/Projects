import os

from audio import Audio
from bs4 import BeautifulSoup
from cpod_scrape import ScrapeCpod
from dictionary import Dictionary
from keys import keys
from logger import Logger
from open_file import OpenFile
from session import Session
from terminal_opts import TerminalOptions
from web_scrape import WebScrape
from word_scrape import WordScrape
from write_file import WriteFile

# FEATURE: add option for scraping lessons
#           - ✅ dialogues
#           - words
#           - expansions
#           - grammar
# FEATURE: add CLI option to download audio of words and/or sentences or dialogues
# FEATURE: allow for option to go back if there are sentences but the level selected filtered them out
# FEATURE: Quitting the APP
#          - ✅ Quit Option on initial run
#          - Quit option on keyboard interrupt
#               - any time during a scrape or audio dl loop
#               - any time the main app runs
# FEATURE: Add ability to check current word list vs new words from Lessons, add ability to scrape words etc
#           - ✅ Check file word list vs stored dictionary for duplicates
#           - Check Words from the Expansion, Lesson for unique new words
#           - Add ability to then go back and scrape unique words
# FEATURE: option to select from example sentences scraped
# FEATURE: Load initial sentences and words
#           - 🔨 words
#                - working but needs to be improved
#           - sentences
# TODO: Replace print with Logger
# TODO: Remove temp.html files from selinium scrape
# TODO: handle case if definition of word is NONE for cpod or md
# TODO: close webdriver
# TODO: error handling for audio download
# TODO: APP Clean up
#   - # TODO: Start code
#   - # TODO: Clean up code accross app


def start():

    try:
        new_session = Session(
            f"{keys['url']}accounts/signin", keys["email"], keys["password"]
        )
        new_session.load_session()

        dictionary = Dictionary()
        dictionary.load_dictionary()
        start_options = TerminalOptions(
            ["Words", "Lessons", "Download Audio From Saved File", "Quit"],
            "Do You Want to Scrape Words or Lessons?",
        ).get_selected()

        if start_options == "Quit":
            new_session.save_session()
            quit()
        filepath = input("Where is the file located?: ")
        while not WriteFile.path_exists(filepath, False):
            filepath = input("File path doesn't exist. Try again: ")
        if start_options == "Words" or start_options == "Lessons":
            term_selection = TerminalOptions(
                ["newline", "comma - (,)", "semi-colon - (;)", "colon - (:)"],
                "How is the data is separated?",
            ).indexes
            seperator = ("\n", ",", ";", ":")

            file_list = OpenFile.open_file(filepath, False, seperator[term_selection])

        if start_options == "Words":
            WordScrape(new_session, dictionary, file_list)

        elif start_options == "Lessons":
            wb = WebScrape(new_session)
            wb.init_driver()

            for c_lesson in file_list:
                word_expansion = []
                wb.run_webdriver(c_lesson)
                lesson = wb.get_source()
                tempfile_path = WriteFile.write_file(
                    "./data/temp/temp.html", lesson["source"]
                )
                data = open(tempfile_path, "r")
                soup = BeautifulSoup(data, "html.parser")
                wcpod = ScrapeCpod(soup)
                wcpod.scrape_dialogues()
                dialogues = wcpod.get_dialogues()
                if len(dialogues) > 0:
                    dictionary.add_sentences(dialogues)

                if "Vocabulary" not in lesson["not_available"]:
                    words = wcpod.scrape_lesson_vocab()
                    non_dup_words = [
                        word.chinese
                        for word in words
                        if not dictionary.check_for_dup(word, False)
                    ]
                    word_expansion.extend(non_dup_words)
                try:
                    os.remove(tempfile_path)
                except OSError as error:
                    raise RuntimeError(error)
            wb.close()
            WriteFile.write_to_csv("./out/dialogs.csv", dictionary.get_all_sentences())
            if len(word_expansion) > 0:
                save_exp_vocab = TerminalOptions(
                    ["Yes", "No"], "Do you want add the Lesson Vocabs?"
                ).get_selected()
                if save_exp_vocab == "Yes":
                    keepAll = TerminalOptions(
                        ["Yes", "No"], "Keep All of the Words?"
                    ).get_selected()
                    if keepAll == "No":
                        word_list = TerminalOptions(
                            [word for word in word_expansion],
                            "Select the Words You Want to Keep:",
                            True,
                        ).get_selected()
                        WordScrape(new_session, dictionary, word_list)
                    else:
                        WordScrape(new_session, dictionary, word_expansion)
            else:
                Logger().insert("There are no new words from these Lessons", "INFO")
        elif start_options == "Download Audio From Saved File":
            Audio(filepath, "word")
        dictionary.save_dictionary()
        new_session.save_session()
    except ValueError as e:
        print(e)


start()
