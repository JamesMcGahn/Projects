from PySide6.QtCore import QModelIndex, Qt
from PySide6.QtGui import QStandardItem, QStandardItemModel
from PySide6.QtWidgets import QWidget
from widget_ui import Ui_Widget


class Widget(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle("QTableView - QStandardItemModel")

        self.model = QStandardItemModel(4, 4)
        for r in range(self.model.rowCount()):
            for c in range(self.model.columnCount()):
                item = QStandardItem("row : " + str(r) + ", column : " + str(c))
                self.model.setItem(r, c, item)

        # Set the model to the view
        self.tableView.setModel(self.model)

        self.read_data_button.clicked.connect(self.read_data)

    def read_data(self):
        for r in range(self.model.rowCount()):
            for c in range(self.model.columnCount()):
                index = self.model.index(r, c, QModelIndex())
                # data = index.data(Qt.DisplayRole)
                data = self.model.data(index, Qt.DisplayRole)
                print(data)
