from PySide6 import QtCore
from PySide6.QtUiTools import QUiLoader

loader = QUiLoader()


class UIPy(QtCore.QObject):
    def __init__(self):
        super().__init__()
        self.ui = loader.load("widget.ui", None)
        self.ui.setWindowTitle("Test")
        self.ui.btn_submit.clicked.connect(self.btn_click)

    def show(self):
        self.ui.show()

    def btn_click(self):
        print(
            f"name: {self.ui.name_line_edit.text()} job:{self.ui.job_line_edit.text()}"
        )