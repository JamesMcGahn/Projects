from PySide6.QtWidgets import QMainWindow, QPushButton


class ButtonHolder(QMainWindow):

    def __init__(self):
        super().__init__()
        self.setWindowTitle("Main Window Title")
        button = QPushButton("Push Me")
        self.setCentralWidget(button)
