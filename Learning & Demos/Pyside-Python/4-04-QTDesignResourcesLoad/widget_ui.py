# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'widget.ui'
##
## Created by: Qt User Interface Compiler version 6.7.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

# trunk-ignore(ruff/F401)
# trunk-ignore(flake8/F401)
import resources_rc
from PySide6.QtCore import QCoreApplication, QMetaObject, QSize
from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QHBoxLayout, QPushButton, QSpinBox


class Ui_Widget(object):
    def setupUi(self, Widget):
        if not Widget.objectName():
            Widget.setObjectName("Widget")
        Widget.resize(467, 45)
        self.horizontalLayout = QHBoxLayout(Widget)
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.minus_button = QPushButton(Widget)
        self.minus_button.setObjectName("minus_button")
        icon = QIcon()
        icon.addFile(":/images/minus.png", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.minus_button.setIcon(icon)

        self.horizontalLayout.addWidget(self.minus_button)

        self.spin_box = QSpinBox(Widget)
        self.spin_box.setObjectName("spin_box")

        self.horizontalLayout.addWidget(self.spin_box)

        self.plus_button = QPushButton(Widget)
        self.plus_button.setObjectName("plus_button")
        icon1 = QIcon()
        icon1.addFile(":/images/plus.png", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.plus_button.setIcon(icon1)

        self.horizontalLayout.addWidget(self.plus_button)

        self.retranslateUi(Widget)

        QMetaObject.connectSlotsByName(Widget)

    # setupUi

    def retranslateUi(self, Widget):
        Widget.setWindowTitle(QCoreApplication.translate("Widget", "Form", None))
        self.minus_button.setText(QCoreApplication.translate("Widget", "Minus", None))
        self.plus_button.setText(QCoreApplication.translate("Widget", "Plus", None))

    # retranslateUi
