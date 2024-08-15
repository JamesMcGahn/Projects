import sys

from PySide6 import QtWidgets
from PySide6.QtUiTools import QUiLoader

loader = QUiLoader()

app = QtWidgets.QApplication(sys.argv)
window = loader.load("widget.ui", None)


def btn_click():
    print(f"name: {window.name_line_edit.text()} job:{window.job_line_edit.text()}")


window.setWindowTitle("Test")
window.btn_submit.clicked.connect(btn_click)
window.show()
app.exec()
