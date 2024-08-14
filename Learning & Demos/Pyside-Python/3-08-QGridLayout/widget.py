from PySide6.QtWidgets import QGridLayout, QPushButton, QSizePolicy, QWidget


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QGrid")

        button1 = QPushButton("1")
        button2 = QPushButton("2")
        button3 = QPushButton("3")
        button3.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Expanding)
        button4 = QPushButton("4")
        button5 = QPushButton("5")
        button6 = QPushButton("6")
        button7 = QPushButton("7")

        grid_layout = QGridLayout()
        # row , column, rowspan, colspan
        grid_layout.addWidget(button1, 0, 0)
        grid_layout.addWidget(button2, 0, 1, 1, 2)
        grid_layout.addWidget(button3, 1, 0, 2, 1)
        grid_layout.addWidget(button4, 1, 1)
        grid_layout.addWidget(button5, 1, 2)
        grid_layout.addWidget(button6, 2, 1)
        grid_layout.addWidget(button7, 2, 2)

        self.setLayout(grid_layout)
