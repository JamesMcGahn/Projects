# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'infodialog.ui'
##
## Created by: Qt User Interface Compiler version 6.3.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import QCoreApplication, QMetaObject
from PySide6.QtWidgets import (
    QComboBox,
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QPushButton,
    QSizePolicy,
    QSpacerItem,
    QVBoxLayout,
)


class Ui_InfoDialog(object):
    def setupUi(self, InfoDialog):
        if not InfoDialog.objectName():
            InfoDialog.setObjectName("InfoDialog")
        InfoDialog.resize(400, 106)
        self.verticalLayout = QVBoxLayout(InfoDialog)
        self.verticalLayout.setObjectName("verticalLayout")
        self.horizontalLayout = QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.label = QLabel(InfoDialog)
        self.label.setObjectName("label")

        self.horizontalLayout.addWidget(self.label)

        self.position_line_edit = QLineEdit(InfoDialog)
        self.position_line_edit.setObjectName("position_line_edit")

        self.horizontalLayout.addWidget(self.position_line_edit)

        self.verticalLayout.addLayout(self.horizontalLayout)

        self.horizontalLayout_2 = QHBoxLayout()
        self.horizontalLayout_2.setObjectName("horizontalLayout_2")
        self.label_2 = QLabel(InfoDialog)
        self.label_2.setObjectName("label_2")

        self.horizontalLayout_2.addWidget(self.label_2)

        self.favorite_os_combo_box = QComboBox(InfoDialog)
        self.favorite_os_combo_box.addItem("")
        self.favorite_os_combo_box.addItem("")
        self.favorite_os_combo_box.addItem("")
        self.favorite_os_combo_box.setObjectName("favorite_os_combo_box")

        self.horizontalLayout_2.addWidget(self.favorite_os_combo_box)

        self.verticalLayout.addLayout(self.horizontalLayout_2)

        self.horizontalLayout_3 = QHBoxLayout()
        self.horizontalLayout_3.setObjectName("horizontalLayout_3")
        self.horizontalSpacer = QSpacerItem(
            40, 20, QSizePolicy.Expanding, QSizePolicy.Minimum
        )

        self.horizontalLayout_3.addItem(self.horizontalSpacer)

        self.ok_button = QPushButton(InfoDialog)
        self.ok_button.setObjectName("ok_button")

        self.horizontalLayout_3.addWidget(self.ok_button)

        self.cancel_button = QPushButton(InfoDialog)
        self.cancel_button.setObjectName("cancel_button")

        self.horizontalLayout_3.addWidget(self.cancel_button)

        self.verticalLayout.addLayout(self.horizontalLayout_3)

        self.retranslateUi(InfoDialog)

        QMetaObject.connectSlotsByName(InfoDialog)

    # setupUi

    def retranslateUi(self, InfoDialog):
        InfoDialog.setWindowTitle(
            QCoreApplication.translate("InfoDialog", "Dialog", None)
        )
        self.label.setText(
            QCoreApplication.translate("InfoDialog", "Position : ", None)
        )
        self.label_2.setText(
            QCoreApplication.translate("InfoDialog", "Favorite OS : ", None)
        )
        self.favorite_os_combo_box.setItemText(
            0, QCoreApplication.translate("InfoDialog", "Windows", None)
        )
        self.favorite_os_combo_box.setItemText(
            1, QCoreApplication.translate("InfoDialog", "Linux", None)
        )
        self.favorite_os_combo_box.setItemText(
            2, QCoreApplication.translate("InfoDialog", "Mac", None)
        )

        self.ok_button.setText(QCoreApplication.translate("InfoDialog", "Ok", None))
        self.cancel_button.setText(
            QCoreApplication.translate("InfoDialog", "Cancel", None)
        )

    # retranslateUi
