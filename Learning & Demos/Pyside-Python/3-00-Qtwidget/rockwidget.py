from PySide6.QtWidgets import QHBoxLayout, QPushButton, QVBoxLayout, QWidget


class RockWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Rock Widget")
        btn1 = QPushButton("Button 1")
        btn1.clicked.connect(self.btn1_clicked)

        btn2 = QPushButton("Button 2")
        btn2.clicked.connect(self.btn2_clicked)

        btn_layout = QHBoxLayout()
        btn_layout = QVBoxLayout()
        btn_layout.addWidget(btn1)
        btn_layout.addWidget(btn2)

        self.setLayout(btn_layout)

    def btn1_clicked(self):
        print("Button 1 clicked")

    def btn2_clicked(self):
        print("Button 2 clicked")
