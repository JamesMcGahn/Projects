from dictionary import Word
from simple_term_menu import TerminalMenu

class ScrapeMdgb:
    def __init__(self, soup, word):
        self.soup = soup
        self.word = word
        self.result_words = []

    def def_selection(self):
        if len(self.result_words) > 1:
            terminal_menu = TerminalMenu([f"{x['chinese']}({x['pinyin']}) - {x['definition']}" for x in self.result_words], title="Select the Definition You Want to Use")
            menu_entry_index = terminal_menu.show()
            sel_word = self.result_words[menu_entry_index]
            return Word(
                sel_word["chinese"],
                sel_word["pinyin"],
                sel_word["definition"],
                sel_word["audio"],
            )
        elif len(self.result_words) == 1:
            sel_word = self.result_words[0]
            return Word(
                sel_word["chinese"],
                sel_word["pinyin"],
                sel_word["definition"],
                sel_word["audio"],
            )
        else:
            return None

    def get_defintion(self):
        print(f"Getting Definition for {self.word} - MDGB")
        results_table = self.soup.find("td", class_="resultswrap")
        if results_table is None:
            return None
        results = results_table.find_all("tr", class_="row")

        for result in results:
            hanzi = result.find("div", class_="hanzi").find("span").string
            pinyin = result.find("div", class_="pinyin").find("span").string
            definition = result.find("div", class_="defs").get_text()
            word = {
                "chinese": hanzi,
                "pinyin": pinyin,
                "definition": definition,
                "audio": "",
            }
            self.result_words.append(word)
        return self.def_selection()
