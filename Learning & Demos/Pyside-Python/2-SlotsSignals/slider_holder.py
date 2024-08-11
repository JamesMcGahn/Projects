from PySide6.QtCore import Qt
from PySide6.QtWidgets import QMainWindow, QSlider


class SliderHolder(QMainWindow):

    def __init__(self):
        super().__init__()
        self.setWindowTitle("Main Window Title")
        slider = QSlider(Qt.Horizontal)
        self.setCentralWidget(slider)

        slider.valueChanged.connect(self.slider_moved)

    def slider_moved(self, data):
        print("value", data)
        print("slider changed")
