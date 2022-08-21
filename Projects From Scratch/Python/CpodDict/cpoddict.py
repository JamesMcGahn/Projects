from csv import DictWriter
from time import sleep
from urllib.parse import unquote

import regex
import requests
from bs4 import BeautifulSoup
from keys import keys


def get_session():
    session = requests.Session()
    payload = {"email": keys["email"], "password": keys["password"]}
    session.post(f"{keys['url']}/accounts/signin", data=payload)
    return session


def get_html(session, word):
    req = session.get(f"{keys['url']}/dictionary/english-chinese/{word}")
    soup = BeautifulSoup(req.text, "html.parser")
    sleep(10)
    return soup


def get_defintion(soup):
    search_table = soup.find("div", class_="sample-search")
    if not search_table:
        return {"chinese": "", "pinyin": "N/A", "definition": "N/A", "audio": "N/A"}
    audio_file = unquote(
        search_table.find(class_="jp-type-single").find("a", class_="download-link")[
            "href"
        ]
    )
    audio_file = audio_file.replace("/redirect/?url=", "")
    pinyin_def = soup.find("div", class_="sample-search").find("p").get_text()
    pinyin_def = (
        pinyin_def.replace("Pinyin: ", "").replace("Definition: ", "").split("\n\t\t\t")
    )
    pinyin = pinyin_def[0]
    definition = pinyin_def[1]
    word = {
        "chinese": "",
        "pinyin": pinyin,
        "definition": definition,
        "audio": audio_file,
    }
    return word


def strip_string(sentence):
    return sentence.replace("\n", "").replace("\t", "").strip()


def get_sentences(soup, levels, word):
    reg_pattern = regex.compile(r"[\p{Han}，。？：！‘\"\\s]+")
    all_sample_sentences = soup.find("table", class_="table-grossary").find_all("tr")
    word_example_sentences = []
    for sentence in all_sample_sentences:
        level = sentence.find(class_="badge").string
        if level in levels:
            sent_cont = sentence.find(class_="click-to-add")
            sentence_all = sent_cont.get_text()
            char_sent = reg_pattern.findall(sentence_all)[0]
            pinyin_sent = sent_cont.find(class_="dict-pinyin-cont").get_text()
            english_sent = sent_cont.find(class_="dict-pinyin-cont").next_sibling
            audio = unquote(
                sentence.find(class_="jp-type-single").find(
                    "a", class_="download-link"
                )["href"]
            )
            english_sent = strip_string(english_sent)
            pinyin_sent = strip_string(pinyin_sent)
            audio = audio.replace("/redirect/?url=", "")
            example_sentence = {
                "word": word,
                "chinese": char_sent,
                "english": english_sent,
                "pinyin": pinyin_sent,
                "level": level,
                "audio": audio,
            }
            word_example_sentences.append(example_sentence)
    return word_example_sentences


def write_to_csv(data, filename):
    if data.len() == 0:
        print("No sentences are available. Try Selecting More Levels.")
        return None
    with open(f"{filename}.csv", "w") as file:
        csv_writer = DictWriter(file, fieldnames=data[0].keys())
        csv_writer.writeheader()
        for dat in data:
            print(dat)
            csv_writer.writerow(dat)


def open_word_list(filename):
    with open(filename) as file:
        words = file.read().split("\n")
    print(words)
    return words


def start(filename):
    print(keys["email"])
    words_list = open_word_list(filename)
    session = get_session()
    finished_words = []
    finished_sentences = []
    levels = ("Elementary", "Pre-Intermediate", "Intermediate")
    for word in words_list:
        soup_res = get_html(session, word)
        defined_word = get_defintion(soup_res)
        example_sentences = get_sentences(soup_res, levels, word)
        defined_word["chinese"] = word
        finished_words.append(defined_word)
        finished_sentences.append(example_sentences)

    finished_sentences = [val for sublist in finished_sentences for val in sublist]
    print(finished_words)
    write_to_csv(finished_words, "words1", "word")
    write_to_csv(finished_sentences, "sentences1", "sentence")


start("./words.txt")
