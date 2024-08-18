# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'widget.ui'
##
## Created by: Qt User Interface Compiler version 6.7.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import QCoreApplication, QMetaObject
from PySide6.QtGui import QFont
from PySide6.QtWidgets import QHBoxLayout, QLabel, QListWidget, QPushButton, QVBoxLayout


class Ui_Widget(object):
    def setupUi(self, Widget):
        if not Widget.objectName():
            Widget.setObjectName("Widget")
        Widget.resize(400, 303)
        self.verticalLayout = QVBoxLayout(Widget)
        self.verticalLayout.setSpacing(6)
        self.verticalLayout.setContentsMargins(11, 11, 11, 11)
        self.verticalLayout.setObjectName("verticalLayout")
        self.horizontalLayout = QHBoxLayout()
        self.horizontalLayout.setSpacing(6)
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.label = QLabel(Widget)
        self.label.setObjectName("label")
        font = QFont()
        font.setFamilies(["Adobe Arabic"])
        font.setPointSize(24)
        font.setBold(True)
        self.label.setFont(font)

        self.horizontalLayout.addWidget(self.label)

        self.fetch_button = QPushButton(Widget)
        self.fetch_button.setObjectName("fetch_button")

        self.horizontalLayout.addWidget(self.fetch_button)

        self.verticalLayout.addLayout(self.horizontalLayout)

        self.listWidget = QListWidget(Widget)
        self.listWidget.setObjectName("listWidget")

        self.verticalLayout.addWidget(self.listWidget)

        self.retranslateUi(Widget)

        QMetaObject.connectSlotsByName(Widget)

    # setupUi

    def retranslateUi(self, Widget):
        Widget.setWindowTitle(QCoreApplication.translate("Widget", "Widget", None))
        self.label.setText(QCoreApplication.translate("Widget", "Post Fetcher", None))
        self.fetch_button.setText(QCoreApplication.translate("Widget", "Fetch", None))

    # retranslateUi
