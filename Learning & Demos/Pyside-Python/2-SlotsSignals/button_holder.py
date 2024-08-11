from PySide6.QtWidgets import QMainWindow, QPushButton


class ButtonHolder(QMainWindow):

    def __init__(self):
        super().__init__()
        self.setWindowTitle("Main Window Title")
        button = QPushButton("Push Me")
        self.setCentralWidget(button)
        button.setCheckable(True)
        button.clicked.connect(self.button_clicked)

    def button_clicked(self, data):
        print("checked", data)
        print("Button clicked")
