from PySide6.QtWidgets import QFileDialog, QPushButton, QVBoxLayout, QWidget


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Q Message Box")

        btn_click = QPushButton("Click")
        btn_click.clicked.connect(self.btn_click_click)

        layout = QVBoxLayout()
        layout.addWidget(btn_click)
        self.setLayout(layout)

    # hard way

    def btn_click_click(self):
        """get directory

                dir = QFileDialog.getExistingDirectory(
            self,
            "Open Directory",
            "/",
            QFileDialog.ShowDirsOnly | QFileDialog.DontResolveSymlinks,
        )
        print(dir)

        """
        """get file
        file_name, _ = QFileDialog.getOpenFileName(
            self, "Open File", "/", "Images (*.png *.jpg);; All files(*.*)"
        )
        print(file_name)
        print(_)
        """

        """get files
        file_names, _ = QFileDialog.getOpenFileNames(
            self,
            "Open File",
            "/",
        )
        for f in file_names:
            print(f)
        """

        file_name, _ = QFileDialog.getSaveFileName(
            self, "Open File", "/", "Images (*.png *.jpg);; All files(*.*)"
        )
        print(file_name)
        print(_)
