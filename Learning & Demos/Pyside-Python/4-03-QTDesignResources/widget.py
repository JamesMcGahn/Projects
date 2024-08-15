# trunk-ignore(ruff/F401)
# trunk-ignore(flake8/F401)
import resources_rc  # You need to manually import the compiled resource file
from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QWidget
from widget_ui import Ui_Widget


class Widget(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle("User data")
        self.spin_box.setValue(50)
        self.plus_button.clicked.connect(self.plus)
        self.minus_button.clicked.connect(self.minus)

        plus_icon = QIcon(":/images/plus.png")
        minus_icon = QIcon(":/images/minus.png")

        self.plus_button.setIcon(plus_icon)
        self.minus_button.setIcon(minus_icon)

    def plus(self):
        value = self.spin_box.value()
        self.spin_box.setValue(value + 1)

    def minus(self):
        value = self.spin_box.value()
        self.spin_box.setValue(value - 1)
