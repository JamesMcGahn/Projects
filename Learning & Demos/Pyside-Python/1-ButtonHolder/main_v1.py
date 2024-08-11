import sys

from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton

app = QApplication(sys.argv)

window = QMainWindow()
window.setWindowTitle("Main Window Title")

button = QPushButton()
button.setText("Push Me")

window.setCentralWidget(button)
window.show()
app.exec()
