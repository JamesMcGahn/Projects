class Dictionary:
    def __init__(self):
        self.dictionary = []
        self.ex_sentences = []

    @staticmethod
    def strip_string(string):
        return string.replace("\n", "").replace("\t", "").strip()

    def add_word(self, word):
        self.dictionary.append(word)

    def add_sentences(self, sentences):
        for sentence in sentences:
            self.ex_sentences.append(sentence)

    def get_words(self):
       return [vars(words) for words in self.dictionary]

    def get_all_sentences(self):
       return [vars(sents) for sents in self.ex_sentences]

    def get_sentences(self, levels):
        return [vars(sents) for sents in self.ex_sentences if sents.level in levels]

class Word:
    def __init__(self, chinese, pinyin, definition, audio):
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

