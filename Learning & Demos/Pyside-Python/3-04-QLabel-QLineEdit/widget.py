from PySide6.QtWidgets import (
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QPushButton,
    QVBoxLayout,
    QWidget,
)


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QLabel and QLineEdit")

        label = QLabel("Fullname : ")
        self.line_edit = QLineEdit()
        # self.line_edit.textChanged.connect(self.text_changed)
        self.line_edit.cursorPositionChanged.connect(self.cursor_pos_change)
        self.line_edit.editingFinished.connect(self.editingFinished)
        self.line_edit.returnPressed.connect(self.returnPressed)
        self.line_edit.selectionChanged.connect(self.selectionChanged)
        self.line_edit.textEdited.connect(self.text_edited)

        button = QPushButton("Grab Data")
        button.clicked.connect(self.button_clicked)
        self.text_holder_label = QLabel("I am here")

        h_layout = QHBoxLayout()
        h_layout.addWidget(label)
        h_layout.addWidget(self.line_edit)

        v_layout = QVBoxLayout()
        v_layout.addLayout(h_layout)
        v_layout.addWidget(button)
        v_layout.addWidget(self.text_holder_label)

        self.setLayout(v_layout)

    def button_clicked(self):
        print("Fullname: " + self.line_edit.text())
        self.text_holder_label.setText(self.line_edit.text())

    # def text_changed(self):
    # self.text_holder_label.setText(self.line_edit.text())

    def cursor_pos_change(self, old, new):
        print(f"old {old} new {new}")

    def editingFinished(self):
        self.text_holder_label.setText(self.line_edit.text())

    def returnPressed(self):
        print("return pressed")

    def selectionChanged(self):
        print(self.line_edit.selectedText())

    def text_edited(self, newtext):
        print(f"new text {newtext}")
