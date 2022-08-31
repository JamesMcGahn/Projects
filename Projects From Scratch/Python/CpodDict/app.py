import os

from bs4 import BeautifulSoup
from cpod_scrape import ScrapeCpod
from dictionary import Dictionary
from keys import keys
from md_scrape import ScrapeMd
from open_file import OpenFile
from session import Session
from simple_term_menu import TerminalMenu
from terminal_opts import TerminalOptions
from web_scrape import WebScrape
from write_file import WriteFile

# FEATURE: add option for scraping lessons dialogues, words, expansions
#           - # FEATURE: based on lesson sections - allow user to save additional expansion sentences or words
# FEATURE: add CLI option to download audio of words and/or sentences or dialogues
# FEATURE: allow for option to go back if there are sentences but the level selected filtered them out
# FEATURE: Quitting the APP
# FEATURE: Add ability to check current word list vs new words from Lessons, add ability to scrape words etc
# TODO: Remove temp.html files from selinium scrape
# TODO: handle case if definition of word is NONE for cpod or md
# TODO: close webdriver
# TODO: APP Clean up
#   - # TODO: Start code
#   - # TODO: Clean up code accross app


def start():
    try:
        new_session = Session(
            f"{keys['url']}accounts/signin", keys["email"], keys["password"]
        )
        new_session.load_session()
        new_session.save_session()
        dictionary = Dictionary()

        start_options = TerminalOptions(
            ["Words", "Lessons"], "Do You Want to Scrape Words or Lessons?"
        ).get_selected()

        filepath = input("Where is the file located?: ")
        while not WriteFile.path_exists(filepath, False):
            filepath = input("File path doesn't exist. Try again: ")

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

            for word in file_list:
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
                    print(dictionary.dictionary)
                else:
                    m_soup_res = new_session.get_html(f"{keys['murl']}{word}")
                    md = ScrapeMd(m_soup_res)
                    m_defined_word = md.get_defintion()
                    if c_defined_word is not None:
                        m_defined_word.audio = c_defined_word.audio
                    dictionary.add_word(m_defined_word)
                dictionary.add_sentences(example_sentences)
            print(dictionary.get_words())
            WriteFile.write_to_csv(
                "./out/words.csv",
                dictionary.get_words(),
            )
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
    except ValueError as e:
        print(e)


start()
