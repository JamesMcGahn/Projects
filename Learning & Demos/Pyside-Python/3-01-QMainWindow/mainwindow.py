from PySide6.QtCore import QSize
from PySide6.QtGui import QAction, QIcon
from PySide6.QtWidgets import QMainWindow, QPushButton, QStatusBar, QToolBar


class MainWindow(QMainWindow):
    def __init__(self, app):
        super().__init__()
        self.app = app
        self.setWindowTitle("Custom MainWindow")

        menu_bar = self.menuBar()
        fileMenu = menu_bar.addMenu("File")
        fileMenu.addAction("test", self.test)
        cheeseMenu = menu_bar.addMenu("Cheese")
        cheeseMenu.addAction("cheese", self.test)

        quit_menu = menu_bar.addMenu("About")
        quit_menu.addAction("About", self.quit_app)

        # in macos this will "Quit" under native quit app menu
        quit_menu = menu_bar.addMenu("Quit")
        quit_menu.addAction("Quit", self.quit_app)

        # in macos this will ignore the native menu and put "Quit" on the created app menu
        quit_menu = menu_bar.addMenu("Quit")
        action = quit_menu.addAction("Quit", self.quit_app)
        action.setMenuRole(QAction.MenuRole.NoRole)

        toolbar = QToolBar("My Toolbar")
        toolbar.setIconSize(QSize(16, 16))
        self.addToolBar(toolbar)
        toolbar.addAction("Quit", self.quit_app)

        action1 = QAction("Some Action", self)
        action1.setStatusTip("Some Action Message")
        action1.triggered.connect(self.toolbar_button_click)
        toolbar.addAction(action1)

        action2 = QAction(QIcon("start.png"), "Some Other Action", self)
        action2.setStatusTip("Some Action Message2")
        action2.triggered.connect(self.toolbar_button_click)
        toolbar.addAction(action2)

        toolbar.addSeparator()
        toolbar.addWidget(QPushButton("ClickMe"))

        self.setStatusBar(QStatusBar(self))

    def quit_app(self):
        # self.app.quit()
        print("quit")

    def test(self):
        print("Test")

    def toolbar_button_click(self):
        print("toolbar click")
        self.statusBar().showMessage("Message Updated with a Click", 3000)
