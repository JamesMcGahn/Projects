from PySide6.QtWidgets import QWidget
from widget_ui import Ui_Widget

# resources are loaded directly in widget_ui.py


class Widget(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle("User data")
        self.spin_box.setValue(50)
        self.plus_button.clicked.connect(self.plus)
        self.minus_button.clicked.connect(self.minus)

    def plus(self):
        value = self.spin_box.value()
        self.spin_box.setValue(value + 1)

    def minus(self):
        value = self.spin_box.value()
        self.spin_box.setValue(value - 1)
