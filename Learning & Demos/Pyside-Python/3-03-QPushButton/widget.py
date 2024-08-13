from PySide6.QtWidgets import QPushButton, QVBoxLayout, QWidget


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Q Message Box")

        btn_click = QPushButton("Click")
        btn_click.clicked.connect(self.btn_click_click)
        btn_click.pressed.connect(self.btn_click_pressed)
        btn_click.clicked.connect(self.btn_click_released)

        layout = QVBoxLayout()
        layout.addWidget(btn_click)
        self.setLayout(layout)

    # hard way
    def btn_click_pressed(self):
        print("button pressed")

    def btn_click_click(self):
        print("button click")

    def btn_click_released(self):
        print("button released")