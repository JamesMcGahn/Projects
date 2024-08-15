from PySide6.QtWidgets import QComboBox, QPushButton, QVBoxLayout, QWidget


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QComboBox")

        self.combo_box = QComboBox()

        self.combo_box.addItem("One")
        self.combo_box.addItem("Two")
        self.combo_box.addItem("Three")
        self.combo_box.addItems(["Four", "Five"])

        btn_current_item = QPushButton("current item")
        btn_current_item.clicked.connect(self.current_item)
        btn_set_value = QPushButton("set value")
        btn_set_value.clicked.connect(self.set_value)
        btn_get_val = QPushButton("get value")
        btn_get_val.clicked.connect(self.get_value)

        v_layout = QVBoxLayout()
        v_layout.addWidget(self.combo_box)

        v_layout.addWidget(btn_current_item)
        v_layout.addWidget(btn_set_value)
        v_layout.addWidget(btn_get_val)

        self.setLayout(v_layout)

    def current_item(self, item):
        print("current item", self.combo_box.currentText())
        print("current index", self.combo_box.currentIndex())

    def set_value(self, text):
        self.combo_box.setCurrentIndex(2)

    def get_value(self):
        for i in range(self.combo_box.count()):
            print(i, self.combo_box.itemText(i))
