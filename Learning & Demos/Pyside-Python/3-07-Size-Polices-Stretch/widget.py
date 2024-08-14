from PySide6.QtWidgets import (
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QPushButton,
    QSizePolicy,
    QVBoxLayout,
    QWidget,
)


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QLabel and QLineEdit")

        label = QLabel("Fullname : ")
        self.line_edit = QLineEdit()
        self.line_edit.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        # horizontal, veritcal
        label.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Expanding)

        button = QPushButton("Grab Data")
        button2 = QPushButton("Grab Data")
        button3 = QPushButton("Grab Data")

        self.text_holder_label = QLabel("I am here")

        h_layout = QHBoxLayout()
        h_layout.addWidget(label)
        h_layout.addWidget(self.line_edit)

        h_layout2 = QHBoxLayout()
        h_layout2.addWidget(button, 2)  # 2 times grow
        h_layout2.addWidget(button2, 1)  # 1 time grow
        h_layout2.addWidget(button3, 1)  # 1 time grow

        v_layout = QVBoxLayout()
        v_layout.addLayout(h_layout)
        v_layout.addLayout(h_layout2)

        v_layout.addWidget(self.text_holder_label)

        self.setLayout(v_layout)
