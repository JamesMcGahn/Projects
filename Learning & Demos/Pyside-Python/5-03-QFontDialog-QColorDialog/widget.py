from PySide6.QtGui import QFont, QPalette
from PySide6.QtWidgets import (
    QColorDialog,
    QFontDialog,
    QHBoxLayout,
    QLabel,
    QPushButton,
    QVBoxLayout,
    QWidget,
)


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Q Message Box")

        btn_font = QPushButton("Set Font")
        btn_back = QPushButton("Set Background")
        btn_fn_color = QPushButton("Set Font Color")
        btn_font.clicked.connect(self.btn_set_font)
        btn_back.clicked.connect(self.btn_set_background)
        btn_fn_color.clicked.connect(self.btn_set_font_color)
        self.label = QLabel("This is the label to change")
        self.label.setAutoFillBackground(True)

        btn_layout = QHBoxLayout()
        btn_layout.addWidget(btn_font)
        btn_layout.addWidget(btn_back)
        btn_layout.addWidget(btn_fn_color)
        v_layout = QVBoxLayout()
        v_layout.addLayout(btn_layout)
        v_layout.addWidget(self.label)
        self.setLayout(v_layout)

    # hard way

    def btn_set_font(self):

        ok, font = QFontDialog.getFont(
            QFont("Arial", 25), self, options=QFontDialog.DontUseNativeDialog
        )

        if ok:
            self.label.setFont(font)
        else:
            print("user cancelled")

    def btn_set_background(self):
        palette = self.label.palette()
        color = palette.color(QPalette.Window)

        pick_color = QColorDialog.getColor(color, parent=self)
        if pick_color.isValid():
            palette.setColor(QPalette.Window, pick_color)
            self.label.setPalette(palette)
        else:
            print("bad color")

    def btn_set_font_color(self):
        palette = self.label.palette()
        color = palette.color(QPalette.WindowText)

        pick_color = QColorDialog.getColor(color, parent=self)
        if pick_color.isValid():
            palette.setColor(QPalette.WindowText, pick_color)
            self.label.setPalette(palette)
        else:
            print("bad color")
