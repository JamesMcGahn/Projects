# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'widget.ui'
##
## Created by: Qt User Interface Compiler version 6.7.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import QCoreApplication, QMetaObject
from PySide6.QtWidgets import QTableView, QVBoxLayout


class Ui_Widget(object):
    def setupUi(self, Widget):
        if not Widget.objectName():
            Widget.setObjectName("Widget")
        Widget.resize(800, 600)
        self.verticalLayout = QVBoxLayout(Widget)
        self.verticalLayout.setObjectName("verticalLayout")
        self.tableView = QTableView(Widget)
        self.tableView.setObjectName("tableView")

        self.verticalLayout.addWidget(self.tableView)

        self.retranslateUi(Widget)

        QMetaObject.connectSlotsByName(Widget)

    # setupUi

    def retranslateUi(self, Widget):
        Widget.setWindowTitle(QCoreApplication.translate("Widget", "Widget", None))

    # retranslateUi
