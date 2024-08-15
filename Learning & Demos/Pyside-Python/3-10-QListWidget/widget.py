from PySide6.QtWidgets import (
    QAbstractItemView,
    QListWidget,
    QPushButton,
    QVBoxLayout,
    QWidget,
)


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Qlist")
        self.list_widget = QListWidget()
        self.list_widget.setSelectionMode(QAbstractItemView.MultiSelection)
        self.list_widget.addItem("One")
        self.list_widget.addItem("Two")
        self.list_widget.addItem("Three")
        self.list_widget.addItems(["Four", "Five"])
        self.list_widget.currentItemChanged.connect(self.currentItemChanged)
        self.list_widget.currentTextChanged.connect(self.currentTextChanged)

        btn_add = QPushButton("Add")
        btn_add.clicked.connect(self.add_item)
        btn_remove = QPushButton("Remove")
        btn_remove.clicked.connect(self.remove_item)
        btn_item_count = QPushButton("Item Count")
        btn_item_count.clicked.connect(self.item_count)
        btn_select = QPushButton("Selected Items")
        btn_select.clicked.connect(self.select_items)

        v_layout = QVBoxLayout()
        v_layout.addWidget(self.list_widget)

        v_layout.addWidget(btn_add)
        v_layout.addWidget(btn_remove)
        v_layout.addWidget(btn_select)
        v_layout.addWidget(btn_item_count)

        self.setLayout(v_layout)

    def currentItemChanged(self, item):
        print(item.text())

    def currentTextChanged(self, text):
        print(text)

    def add_item(self):
        self.list_widget.addItem("new")

    def remove_item(self):
        self.list_widget.takeItem(self.list_widget.currentRow())

    def item_count(self):
        print("item count", self.list_widget.count())

    def select_items(self):
        for i in self.list_widget.selectedItems():
            print(i.text())
