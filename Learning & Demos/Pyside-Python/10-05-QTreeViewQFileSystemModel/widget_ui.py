# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'widget.ui'
##
## Created by: Qt User Interface Compiler version 6.7.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import QCoreApplication, QMetaObject
from PySide6.QtWidgets import (
    QHBoxLayout,
    QListView,
    QPushButton,
    QTreeView,
    QVBoxLayout,
)


class Ui_Widget(object):
    def setupUi(self, Widget):
        if not Widget.objectName():
            Widget.setObjectName("Widget")
        Widget.resize(800, 416)
        self.verticalLayout = QVBoxLayout(Widget)
        self.verticalLayout.setObjectName("verticalLayout")
        self.horizontalLayout = QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.treeView = QTreeView(Widget)
        self.treeView.setObjectName("treeView")

        self.horizontalLayout.addWidget(self.treeView)

        self.listView = QListView(Widget)
        self.listView.setObjectName("listView")

        self.horizontalLayout.addWidget(self.listView)

        self.verticalLayout.addLayout(self.horizontalLayout)

        self.read_tree_model_data_button = QPushButton(Widget)
        self.read_tree_model_data_button.setObjectName("read_tree_model_data_button")

        self.verticalLayout.addWidget(self.read_tree_model_data_button)

        self.retranslateUi(Widget)

        QMetaObject.connectSlotsByName(Widget)

    # setupUi

    def retranslateUi(self, Widget):
        Widget.setWindowTitle(QCoreApplication.translate("Widget", "Widget", None))
        self.read_tree_model_data_button.setText(
            QCoreApplication.translate("Widget", "Read TreeModel Data", None)
        )

    # retranslateUi
