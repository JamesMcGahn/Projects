import sys

from mainwindow import MainWindow
from PySide6.QtWidgets import QApplication, QWidget

app = QApplication(sys.argv)

window = MainWindow(app)
window.show()

app.exec()