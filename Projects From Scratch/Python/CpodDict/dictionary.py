import pickle

from open_file import OpenFile
from terminal_opts import TerminalOptions
from write_file import WriteFile


class Dictionary:
    def __init__(self):
        self.masterdict = []
        self.sess_dictionary = []
        self.ex_sentences = []
        self.sess_sentences = []
        self.word_id = 1

    @staticmethod
    def strip_string(string):
        return string.replace("\n", "").replace("\t", "").strip()

    def check_for_dup(self, word):
        if any(
            (k.chinese == word.chinese and k.pinyin == word.pinyin and (wordmatch := k))
            for k in self.masterdict
        ):
            # trunk-ignore(flake8/F821)
            print(f"In Dictionary: {wordmatch.chinese} - {wordmatch.definition}")
            keepword = TerminalOptions(
                ["Yes", "No"],
                f"Keep Potential Duplicate? - {word.chinese} - {word.definition}",
            ).get_selected()
            if keepword == "No":
                print(f"{word.chinese} not saved to the dictionary.")
                return True
        else:
            return False

    def add_word(self, word, dups=False):
        if not dups and self.check_for_dup(word):
            return
        word.id = self.word_id
        self.sess_dictionary.append(word)
        self.masterdict.append(word)
        self.word_id += 1

    def add_sentences(self, sentences):
        for sentence in sentences:
            self.ex_sentences.append(sentence)
            self.sess_sentences.append(sentence)

    def get_words(self):
        return [vars(words) for words in self.sess_dictionary]

    def get_all_sentences(self, levels=False):
        if levels is False:
            return [vars(sents) for sents in self.ex_sentences]
        return [vars(sents) for sents in self.ex_sentences if sents.level in levels]

    def get_sentences(self):
        return [vars(sents) for sents in self.sess_sentences]

    def save_dictionary(self):
        self.sess_dictionary = []
        WriteFile.write_file(
            "./data/dictionary_words.pickle", pickle.dumps(self.masterdict), "wb", True
        )
        WriteFile.write_file(
            "./data/dictionary_id.pickle", pickle.dumps(self.word_id), "wb", True
        )

    def load_dictionary(self):
        try:
            print("Loading Dictionary...")
            dictionary = OpenFile.open_pickle("./data/dictionary_words.pickle")
            dictionary_id = OpenFile.open_pickle("./data/dictionary_id.pickle")
            self.masterdict = dictionary
            self.word_id = dictionary_id
        except ValueError:
            print("Error loading Dictionary - No File Exists")
            return self


class Word:
    def __init__(self, chinese, definition, pinyin, audio):
        self.id = 0
        self.chinese = chinese
        self.pinyin = pinyin
        self.definition = definition
        self.audio = audio


class Sentence:
    def __init__(self, word, chinese, english, pinyin, level, audio):
        self.word = word
        self.chinese = chinese
        self.english = english
        self.pinyin = pinyin
        self.level = level
        self.audio = audio
