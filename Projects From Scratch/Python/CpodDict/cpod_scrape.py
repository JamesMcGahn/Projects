from urllib.parse import unquote

import regex
from bs4 import BeautifulSoup
from dictionary import Dictionary, Sentence, Word
from terminal_opts import TerminalOptions


class ScrapeCpod:
    def __init__(self, soup):
        self.soup = soup
        self.word_example_sentences = []
        self.dialogue = []
        self.definition = None

    def get_sentences(self):
        return self.word_example_sentences

    def get_defintion(self):
        return self.definition

    def get_dialogues(self):
        return self.dialogue

    def scrape_audio(self, element):
        audio_table = element.find(class_="jp-type-single")
        if audio_table is None:
            return ""
        audio_file = unquote(audio_table.find("a", class_="download-link")["href"])
        audio_file = audio_file.replace("/redirect/?url=", "")
        return audio_file

    def scrape_defintion(self):
        search_table = self.soup.find("div", class_="sample-search")
        if search_table is None:
            return None

        audio_file = ""
        word = ""
        pinyin = ""
        definition = ""

        if search_table is not None:
            word = Dictionary.strip_string(search_table.find("h2").next_element)
            audio_file = self.scrape_audio(search_table)
            pinyin_def = search_table.find("p").get_text()
            pinyin_def = (
                pinyin_def.replace("Pinyin: ", "")
                .replace("Definition: ", "")
                .split("\n\t\t\t")
            )
            pinyin = pinyin_def[0]
            definition = pinyin_def[1]

        self.definition = Word(word, pinyin, definition, audio_file)

    def scrape_sentences(self):
        reg_pattern = regex.compile(r"[\p{Han}，。？：！‘\"\\s]+")

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
            audio = self.scrape_audio(sentence)
            english_sent = Dictionary.strip_string(english_sent)
            pinyin_sent = Dictionary.strip_string(pinyin_sent)
            example_sentence = Sentence(
                self.word, char_sent, english_sent, pinyin_sent, level, audio
            )
            self.word_example_sentences.append(example_sentence)

    def dialogue_selection(self):
        keepAll = TerminalOptions(
            ["Yes", "No"],
            "Do you want to Keep the Whole Dialogue?",
            False,
        ).get_selected()
        if keepAll == "Yes":
            print("Keeping All")
            return
        term_selection = TerminalOptions(
            [f"{x.chinese} - {x.english}" for x in self.dialogue],
            "Which the Sentences Do You Want to Keep?",
            True,
        ).indexes
        self.dialogue = [self.dialogue[i] for i in term_selection]

    def scrape_dialogues(self):
        dialogue_cont = self.soup.find("div", id="dialogue")
        dialogue = dialogue_cont.find_all("tr")
        title_cont = self.soup.find("h1", class_="lesson-page-title")
        title = title_cont.find("span", attrs={"itemprop": "name"}).string
        badge = title_cont.find("a", class_="badge").get_text()
        for sentence in dialogue:

            chinese = sentence.find("p", class_="click-to-add").get_text()
            pinyin = sentence.find("p", class_="show-pinyin").get_text()
            english = sentence.find("p", class_="translation-container").get_text()
            audio = self.scrape_audio(sentence)
            chinese = Dictionary.strip_string(chinese)
            pinyin = Dictionary.strip_string(pinyin)
            english = Dictionary.strip_string(english)
            dialogue_sent = Sentence(title, chinese, english, pinyin, badge, audio)
            self.dialogue.append(dialogue_sent)
        return self.dialogue_selection()


data = open("./test.html", "r")
soup = BeautifulSoup(data, "html.parser")
print(soup)
s = ScrapeCpod(soup)
s.scrape_dialogues()
