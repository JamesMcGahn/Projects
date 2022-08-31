from simple_term_menu import TerminalMenu


class TerminalOptions:
    def __init__(self, options, title, multi=False):
        self.options = options
        self.isMulti = multi
        self.title = title
        self.start = TerminalMenu(
            self.options,
            title=self.title,
            multi_select=self.isMulti,
            show_multi_select_hint=self.isMulti,
        )
        self.indexes = self.show()
        self.chosen = self.start.chosen_menu_entries

    def show(self):
        return self.start.show()

    def get_selected(self, arry=False):
        if not self.isMulti and arry:
            return [self.options[self.indexes]]
        elif not self.isMulti:
            return self.options[self.indexes]
        elif self.isMulti and arry:
            return list(self.chosen)
        else:
            return self.chosen
