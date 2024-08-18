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
    QCheckBox,
    QDateTimeEdit,
    QGroupBox,
    QLCDNumber,
    QLineEdit,
    QPushButton,
    QRadioButton,
    QSpinBox,
    QVBoxLayout,
)


class Ui_Widget(object):
    def setupUi(self, Widget):
        if not Widget.objectName():
            Widget.setObjectName("Widget")
        Widget.resize(295, 398)
        self.verticalLayout_3 = QVBoxLayout(Widget)
        self.verticalLayout_3.setObjectName("verticalLayout_3")
        self.button = QPushButton(Widget)
        self.button.setObjectName("button")

        self.verticalLayout_3.addWidget(self.button)

        self.groupBox = QGroupBox(Widget)
        self.groupBox.setObjectName("groupBox")
        self.verticalLayout = QVBoxLayout(self.groupBox)
        self.verticalLayout.setObjectName("verticalLayout")
        self.checkBox = QCheckBox(self.groupBox)
        self.checkBox.setObjectName("checkBox")

        self.verticalLayout.addWidget(self.checkBox)

        self.checkBox_2 = QCheckBox(self.groupBox)
        self.checkBox_2.setObjectName("checkBox_2")

        self.verticalLayout.addWidget(self.checkBox_2)

        self.checkBox_3 = QCheckBox(self.groupBox)
        self.checkBox_3.setObjectName("checkBox_3")

        self.verticalLayout.addWidget(self.checkBox_3)

        self.verticalLayout_3.addWidget(self.groupBox)

        self.groupBox_2 = QGroupBox(Widget)
        self.groupBox_2.setObjectName("groupBox_2")
        self.verticalLayout_2 = QVBoxLayout(self.groupBox_2)
        self.verticalLayout_2.setObjectName("verticalLayout_2")
        self.radioButton = QRadioButton(self.groupBox_2)
        self.radioButton.setObjectName("radioButton")

        self.verticalLayout_2.addWidget(self.radioButton)

        self.radioButton_2 = QRadioButton(self.groupBox_2)
        self.radioButton_2.setObjectName("radioButton_2")

        self.verticalLayout_2.addWidget(self.radioButton_2)

        self.radioButton_3 = QRadioButton(self.groupBox_2)
        self.radioButton_3.setObjectName("radioButton_3")

        self.verticalLayout_2.addWidget(self.radioButton_3)

        self.verticalLayout_3.addWidget(self.groupBox_2)

        self.lineEdit = QLineEdit(Widget)
        self.lineEdit.setObjectName("lineEdit")

        self.verticalLayout_3.addWidget(self.lineEdit)

        self.spinBox = QSpinBox(Widget)
        self.spinBox.setObjectName("spinBox")

        self.verticalLayout_3.addWidget(self.spinBox)

        self.dateTimeEdit = QDateTimeEdit(Widget)
        self.dateTimeEdit.setObjectName("dateTimeEdit")

        self.verticalLayout_3.addWidget(self.dateTimeEdit)

        self.lcdNumber = QLCDNumber(Widget)
        self.lcdNumber.setObjectName("lcdNumber")

        self.verticalLayout_3.addWidget(self.lcdNumber)

        self.retranslateUi(Widget)

        QMetaObject.connectSlotsByName(Widget)

    # setupUi

    def retranslateUi(self, Widget):
        Widget.setWindowTitle(QCoreApplication.translate("Widget", "Form", None))
        self.button.setText(QCoreApplication.translate("Widget", "Click", None))
        self.groupBox.setTitle(QCoreApplication.translate("Widget", "GroupBox", None))
        self.checkBox.setText(QCoreApplication.translate("Widget", "CheckBox", None))
        self.checkBox_2.setText(QCoreApplication.translate("Widget", "CheckBox", None))
        self.checkBox_3.setText(QCoreApplication.translate("Widget", "CheckBox", None))
        self.groupBox_2.setTitle(QCoreApplication.translate("Widget", "GroupBox", None))
        self.radioButton.setText(
            QCoreApplication.translate("Widget", "RadioButton", None)
        )
        self.radioButton_2.setText(
            QCoreApplication.translate("Widget", "RadioButton", None)
        )
        self.radioButton_3.setText(
            QCoreApplication.translate("Widget", "RadioButton", None)
        )

    # retranslateUi
