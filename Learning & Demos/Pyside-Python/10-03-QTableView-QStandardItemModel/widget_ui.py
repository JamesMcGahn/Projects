# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'widget.ui'
##
## Created by: Qt User Interface Compiler version 6.7.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import QCoreApplication, QMetaObject
from PySide6.QtWidgets import QPushButton, QTableView, QVBoxLayout


class Ui_Widget(object):
    def setupUi(self, Widget):
        if not Widget.objectName():
            Widget.setObjectName("Widget")
        Widget.resize(416, 407)
        self.verticalLayout = QVBoxLayout(Widget)
        self.verticalLayout.setObjectName("verticalLayout")
        self.tableView = QTableView(Widget)
        self.tableView.setObjectName("tableView")

        self.verticalLayout.addWidget(self.tableView)

        self.read_data_button = QPushButton(Widget)
        self.read_data_button.setObjectName("read_data_button")

        self.verticalLayout.addWidget(self.read_data_button)

        self.retranslateUi(Widget)

        QMetaObject.connectSlotsByName(Widget)

    # setupUi

    def retranslateUi(self, Widget):
        Widget.setWindowTitle(QCoreApplication.translate("Widget", "Widget", None))
        self.read_data_button.setText(
            QCoreApplication.translate("Widget", "Read data", None)
        )

    # retranslateUi
