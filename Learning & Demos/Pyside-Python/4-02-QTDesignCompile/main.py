import sys

from PySide6.QtWidgets import QApplication
from ui_py import UIPy

app = QApplication(sys.argv)

widget = UIPy()
widget.show()

app.exec()
