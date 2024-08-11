import sys

from button_holder import ButtonHolder
from PySide6.QtWidgets import QApplication

app = QApplication(sys.argv)

window = ButtonHolder()

window.show()
app.exec()
