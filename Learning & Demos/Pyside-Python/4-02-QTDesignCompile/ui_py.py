from PySide6.QtWidgets import QWidget
from widget_ui import Ui_Widget


class UIPy(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)

        self.setWindowTitle("Test")
        self.btn_submit.clicked.connect(self.btn_click)

    def btn_click(self):
        print(f"name: {self.name_line_edit.text()} job:{self.job_line_edit.text()}")
