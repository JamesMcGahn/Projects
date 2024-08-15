# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'widget.ui'
##
## Created by: Qt User Interface Compiler version 6.7.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import QCoreApplication, QMetaObject
from PySide6.QtWidgets import QHBoxLayout, QLabel, QLineEdit, QPushButton, QVBoxLayout


class Ui_Widget(object):
    def setupUi(self, Widget):
        if not Widget.objectName():
            Widget.setObjectName("Widget")
        Widget.resize(231, 114)
        self.verticalLayout = QVBoxLayout(Widget)
        self.verticalLayout.setObjectName("verticalLayout")
        self.horizontalLayout = QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.label = QLabel(Widget)
        self.label.setObjectName("label")

        self.horizontalLayout.addWidget(self.label)

        self.name_line_edit = QLineEdit(Widget)
        self.name_line_edit.setObjectName("name_line_edit")

        self.horizontalLayout.addWidget(self.name_line_edit)

        self.verticalLayout.addLayout(self.horizontalLayout)

        self.horizontalLayout_2 = QHBoxLayout()
        self.horizontalLayout_2.setObjectName("horizontalLayout_2")
        self.label_2 = QLabel(Widget)
        self.label_2.setObjectName("label_2")

        self.horizontalLayout_2.addWidget(self.label_2)

        self.job_line_edit = QLineEdit(Widget)
        self.job_line_edit.setObjectName("job_line_edit")

        self.horizontalLayout_2.addWidget(self.job_line_edit)

        self.verticalLayout.addLayout(self.horizontalLayout_2)

        self.btn_submit = QPushButton(Widget)
        self.btn_submit.setObjectName("btn_submit")

        self.verticalLayout.addWidget(self.btn_submit)

        self.retranslateUi(Widget)

        QMetaObject.connectSlotsByName(Widget)

    # setupUi

    def retranslateUi(self, Widget):
        Widget.setWindowTitle(QCoreApplication.translate("Widget", "Form", None))
        self.label.setText(QCoreApplication.translate("Widget", "name", None))
        self.label_2.setText(QCoreApplication.translate("Widget", "job", None))
        self.btn_submit.setText(QCoreApplication.translate("Widget", "Submit", None))

    # retranslateUi
