from PySide6.QtWidgets import (
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QPushButton,
    QTabWidget,
    QVBoxLayout,
    QWidget,
)


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QTab")

        tab_widget = QTabWidget(self)

        widget_form = QWidget()
        label_name = QLabel("name")
        line_edit = QLineEdit()
        form_layout = QHBoxLayout()
        form_layout.addWidget(label_name)
        form_layout.addWidget(line_edit)
        widget_form.setLayout(form_layout)

        wig_btn = QWidget()
        btn1 = QPushButton("one")
        btn2 = QPushButton("two")
        btn3 = QPushButton("three")
        btn_layout = QVBoxLayout()
        btn_layout.addWidget(btn1)
        btn_layout.addWidget(btn2)
        btn_layout.addWidget(btn3)
        wig_btn.setLayout(btn_layout)

        tab_widget.addTab(widget_form, "Info")
        tab_widget.addTab(wig_btn, "Button")

        layout = QHBoxLayout()
        layout.addWidget(tab_widget)
        self.setLayout(layout)
