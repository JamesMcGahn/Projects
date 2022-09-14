import os

from audio import Audio
from bs4 import BeautifulSoup
from cpod_scrape import ScrapeCpod
from dictionary import Dictionary
from keys import keys
from logger import Logger
from md_scrape import ScrapeMd
from open_file import OpenFile
from session import Session
from simple_term_menu import TerminalMenu
from terminal_opts import TerminalOptions
from web_scrape import WebScrape
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
# TODO: Replace print with Logger
#       - add logger for terminal options for selection
# TODO: Remove temp.html files from selinium scrape
# TODO: change remaning terminal menus to terminal options
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
            definition_options = TerminalMenu(
                ["Use Cpod Definitions", "Use Mdgb Definitions"],
                title="Where should we grab defintions from?",
            )
            definition_source = definition_options.show()

            save_sentences = TerminalMenu(
                ["Yes", "No"], title="Do you want Example Sentences?"
            )
            save_sent_yes = save_sentences.show()
            if save_sent_yes == "Yes":
                terminal_level_menu = TerminalMenu(
                    [
                        "Newbie",
                        "Elementary",
                        "Pre-Intermediate",
                        "Intermediate",
                        "Advanced",
                    ],
                    multi_select=True,
                    show_multi_select_hint=True,
                )
                terminal_level_menu.show()
                levels = terminal_level_menu.chosen_menu_entries

            for i, word in enumerate(file_list):
                print(f"Word: {word}...({i +1}/{len(file_list)})")
                c_soup_res = new_session.get_html(
                    f"{keys['url']}/dictionary/english-chinese/{word}"
                )
                cpod = ScrapeCpod(c_soup_res, word)
                cpod.scrape_defintion()
                cpod.scrape_sentences()
                c_defined_word = cpod.get_defintion()
                example_sentences = cpod.get_sentences()
                if definition_source == 0 and c_defined_word is not None:
                    dictionary.add_word(c_defined_word)
                else:
                    m_soup_res = new_session.get_html(f"{keys['murl']}{word}")
                    md = ScrapeMd(m_soup_res)
                    m_defined_word = md.get_defintion()
                    if c_defined_word is not None:
                        m_defined_word.audio = c_defined_word.audio
                    dictionary.add_word(m_defined_word)
                dictionary.add_sentences(example_sentences)
            word_csv_path = WriteFile.write_to_csv(
                "./out/words.csv",
                dictionary.get_words(),
            )
            word_audio = TerminalOptions(
                ["Yes", "No"], "Do You Download the Audio for the Words?"
            ).get_selected()
            if word_audio == "Yes":
                Audio(word_csv_path, "word")
            if save_sent_yes == "Yes":
                WriteFile.write_to_csv(
                    "./out/ex_sentences.csv", dictionary.get_sentences(levels)
                )
        elif start_options == "Lessons":
            wb = WebScrape(new_session)
            wb.init_driver()
            for lesson in file_list:
                wb.run_webdriver(lesson)
                lesson = wb.get_source()
                tempfile_path = WriteFile.write_file("./temp.html", lesson["source"])
                data = open(tempfile_path, "r")
                soup = BeautifulSoup(data, "html.parser")
                wcpod = ScrapeCpod(soup)
                wcpod.scrape_dialogues()
                dialogues = wcpod.get_dialogues()
                if len(dialogues) > 0:
                    dictionary.add_sentences(dialogues)
            WriteFile.write_to_csv("./out/dialogs.csv", dictionary.get_all_sentences())
        elif start_options == "Download Audio From Saved File":
            Audio(filepath, "word")
        dictionary.save_dictionary()
        new_session.save_session()
    except ValueError as e:
        print(e)


start()
