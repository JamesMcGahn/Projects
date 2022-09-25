from audio import Audio
from dictionary import Dictionary
from keys import keys
from lesson_scrape import LessonScrape
from open_file import OpenFile
from session import Session
from terminal_opts import TerminalOptions
from word_scrape import WordScrape
from write_file import WriteFile

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
# TODO: handle case if definition of word is NONE for cpod or md
# TODO: error handling for audio download
# TODO: APP Clean up
#   - # TODO: 🔨 Start code
#   - # TODO: 🔨 Clean up code accross app


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
            LessonScrape(new_session, dictionary, file_list)

        elif start_options == "Download Audio From Saved File":
            Audio(filepath, "word")
        dictionary.save_dictionary()
        new_session.save_session()
    except ValueError as e:
        print(e)


start()
