from PySide6.QtWidgets import QInputDialog, QLabel, QPushButton, QVBoxLayout, QWidget


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Q Message Box")
        self.label = QLabel("This is the label to change")
        btn_click = QPushButton("Click")
        btn_click.clicked.connect(self.btn_click_click)

        layout = QVBoxLayout()
        layout.addWidget(btn_click)
        layout.addWidget(self.label)
        self.setLayout(layout)

    def btn_click_click(self):
        text, ok = QInputDialog.getText(self, "get text", "enter your name")
        if ok and not text == "":
            self.label.setText(text)

    # getItem
    # getDouble
    # getInt
