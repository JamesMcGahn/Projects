from PySide6.QtCore import QFile, QIODevice, QTextStream
from PySide6.QtWidgets import QFileDialog, QMessageBox, QWidget
from widget_ui import Ui_Widget


class Widget(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle("QFile Demo")

        self.write_button.clicked.connect(self.write_button_clicked)
        self.read_button.clicked.connect(self.read_button_clicked)
        self.select_file_button.clicked.connect(self.select_file_button_clicked)
        self.copy_file_button.clicked.connect(self.copy_file_button_clicked)

    def read_button_clicked(self):
        file_content = ""
        file_name, _ = QFileDialog.getOpenFileName(
            self, "Open File", "./", "Text(*.txt)"
        )
        if file_name == "":
            return
        print("filename", file_name)
        file = QFile(file_name)
        if not file.open(QIODevice.ReadOnly | QIODevice.Text):
            return
        in_stream = QTextStream(file)
        while not in_stream.atEnd():
            line = in_stream.readLine()
            file_content += line
            file_content += "\n"
        file.close()
        self.textEdit.clear()
        self.textEdit.setText(file_content)

    def write_button_clicked(self):
        file_name, _ = QFileDialog.getSaveFileName(
            self, "Save File", "./", "Text(*.txt)"
        )
        if file_name == "":
            return
        print("filename", file_name)
        file = QFile(file_name)
        if not file.open(QIODevice.WriteOnly | QIODevice.Text):
            return
        out = QTextStream(file)
        out << self.textEdit.toPlainText() << "\n"
        file.close()

    def select_file_button_clicked(self):
        file_name, _ = QFileDialog.getOpenFileName(
            self, "Open File", "./", "Text(*.txt)"
        )
        if file_name == "":
            return
        self.source_line_edit.setText(file_name)

    def copy_file_button_clicked(self):
        src = self.source_line_edit.text()
        dst = self.dest_line_edit.text()

        if src == "" or dst == "":
            return

        file = QFile(src)
        if file.copy(dst):
            QMessageBox.information(self, "Success", "File copied successfully")
        else:
            QMessageBox.information(self, "Failure", "Copy Failed")
