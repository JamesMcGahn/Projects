import sys

from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton


class ButtonHolder(QMainWindow):

    def __init__(self):
        super().__init__()
        self.setWindowTitle("Main Window Title")
        button = QPushButton("Push Me")
        self.setCentralWidget(button)


app = QApplication(sys.argv)

window = ButtonHolder()

window.show()
app.exec()
