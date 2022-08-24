from urllib.parse import unquote

import regex
from dictionary import Dictionary, Sentence, Word


class ScrapeCpod:
    def __init__(self, soup, word):
        self.soup = soup
        self.word = word

    def get_audio(self, element):
        audio_table = element.find(class_="jp-type-single")
        if audio_table is None:
            return ""
            # TODO: find another source for words
        audio_file = unquote(audio_table.find("a", class_="download-link")["href"])
        audio_file = audio_file.replace("/redirect/?url=", "")
        return audio_file

    def get_defintion(self):
        print(f"Getting Definition for {self.word}")
        search_table = self.soup.find("div", class_="sample-search")
        if search_table is None:
            return Word(self.word, "N/A", "N/A", "N/A")
            # TODO: find other source

        pinyin_def = self.soup.find("div", class_="sample-search")
        audio_file = self.get_audio(search_table)
        pinyin = ""
        definition = ""

        if pinyin_def is not None:
            pinyin_def = pinyin_def.find("p").get_text()
            pinyin_def = (
                pinyin_def.replace("Pinyin: ", "")
                .replace("Definition: ", "")
                .split("\n\t\t\t")
            )
            pinyin = pinyin_def[0]
            definition = pinyin_def[1]

        return Word(self.word, pinyin, definition, audio_file)

    def get_sentences(self):
        reg_pattern = regex.compile(r"[\p{Han}，。？：！‘\"\\s]+")
        word_example_sentences = []
        sample_sentences_table = self.soup.find("table", class_="table-grossary")
        if sample_sentences_table is None:
            return []

        all_sample_sentences = sample_sentences_table.find_all("tr")
        for sentence in all_sample_sentences:
            level = sentence.find(class_="badge").string
            sent_cont = sentence.find(class_="click-to-add")
            sentence_all = sent_cont.get_text()
            char_sent = reg_pattern.findall(sentence_all)[0]
            pinyin_sent = sent_cont.find(class_="dict-pinyin-cont").get_text()
            english_sent = sent_cont.find(class_="dict-pinyin-cont").next_sibling
            audio = self.get_audio(sentence)
            english_sent = Dictionary.strip_string(english_sent)
            pinyin_sent = Dictionary.strip_string(pinyin_sent)
            example_sentence = Sentence(
                self.word, char_sent, english_sent, pinyin_sent, level, audio
            )
            word_example_sentences.append(example_sentence)
        return word_example_sentences
