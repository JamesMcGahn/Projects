from PySide6.QtWidgets import QMessageBox, QPushButton, QVBoxLayout, QWidget


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Q Message Box")

        btn_hard = QPushButton("Hard")
        btn_hard.clicked.connect(self.btn_hard_pressed)

        btn_critical = QPushButton("critical")
        btn_critical.clicked.connect(self.btn_critical_pressed)

        btn_question = QPushButton("question")
        btn_question.clicked.connect(self.btn_question_pressed)

        btn_information = QPushButton("information")
        btn_information.clicked.connect(self.btn_information_pressed)

        btn_warning = QPushButton("warning")
        btn_warning.clicked.connect(self.btn_warning_pressed)

        btn_about = QPushButton("about")
        btn_about.clicked.connect(self.btn_about_pressed)

        layout = QVBoxLayout()
        layout.addWidget(btn_hard)
        layout.addWidget(btn_critical)
        layout.addWidget(btn_question)
        layout.addWidget(btn_information)
        layout.addWidget(btn_warning)
        layout.addWidget(btn_about)
        self.setLayout(layout)

    # hard way
    def btn_hard_pressed(self):
        message = QMessageBox()
        message.setMinimumSize(700, 200)
        message.setWindowTitle("Message Title")
        message.setText("Blah Balh")
        message.setInformativeText("Do something about it?")
        message.setIcon(QMessageBox.Critical)
        message.setStandardButtons(QMessageBox.Ok | QMessageBox.Cancel)
        message.setDefaultButton(QMessageBox.Ok)

        ret = message.exec()
        if ret == QMessageBox.Ok:
            print("user selected OK")
        else:
            print("user selected Cancel")

    # easy way
    def btn_critical_pressed(self):
        ret = QMessageBox.critical(
            self,
            "Message Title",
            "Critical Message",
            QMessageBox.Ok | QMessageBox.Cancel,
        )

        if ret == QMessageBox.Ok:
            print("user selected OK")
        else:
            print("user selected Cancel")

    def btn_question_pressed(self):
        ret = QMessageBox.question(
            self,
            "Message Title",
            "question Message",
            QMessageBox.Ok | QMessageBox.Cancel,
        )

        if ret == QMessageBox.Ok:
            print("user selected OK")
        else:
            print("user selected Cancel")

    def btn_information_pressed(self):
        ret = QMessageBox.information(
            self,
            "Message Title",
            "information Message",
            QMessageBox.Ok | QMessageBox.Cancel,
        )

        if ret == QMessageBox.Ok:
            print("user selected OK")
        else:
            print("user selected Cancel")

    def btn_warning_pressed(self):
        ret = QMessageBox.warning(
            self,
            "Message Title",
            "warning Message",
            QMessageBox.Ok | QMessageBox.Cancel,
        )

        if ret == QMessageBox.Ok:
            print("user selected OK")
        else:
            print("user selected Cancel")

    def btn_about_pressed(self):
        ret = QMessageBox.about(
            self,
            "Message Title",
            "about Message",
            QMessageBox.Ok | QMessageBox.Cancel,
        )

        if ret == QMessageBox.Ok:
            print("user selected OK")
        else:
            print("user selected Cancel")
