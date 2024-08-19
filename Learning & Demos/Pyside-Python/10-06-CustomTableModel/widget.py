from PySide6.QtWidgets import QWidget
from tablemodel import TableModel
from widget_ui import Ui_Widget


class Widget(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle("Custom TableModel")

        self.model = TableModel()
        self.tableView.setModel(self.model)
