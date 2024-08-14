from PySide6.QtWidgets import (
    QButtonGroup,
    QCheckBox,
    QGroupBox,
    QHBoxLayout,
    QRadioButton,
    QVBoxLayout,
    QWidget,
)


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QCheck Box")

        os = QGroupBox("Choose OS")
        wind = QCheckBox("Windows")
        wind.clicked.connect(
            self.wind_box_toggled,
        )

        lin = QCheckBox("linux")
        lin.toggled.connect(self.lin_box_toggled)

        mac = QCheckBox("mac")
        mac.toggled.connect(self.mac_box_toggled)
        layout = QVBoxLayout()
        layout.addWidget(wind)
        layout.addWidget(lin)
        layout.addWidget(mac)
        os.setLayout(layout)

        drinks = QGroupBox("Choose drink")
        beer = QCheckBox("beer")
        juice = QCheckBox("juice")
        coffee = QCheckBox("coffee")
        beer.setChecked(True)

        ebtng = QButtonGroup(self)  # self parent is needed here
        ebtng.addButton(beer)
        ebtng.addButton(juice)
        ebtng.addButton(coffee)
        ebtng.setExclusive(True)

        dr_layout = QVBoxLayout()
        dr_layout.addWidget(beer)
        dr_layout.addWidget(juice)
        dr_layout.addWidget(coffee)
        drinks.setLayout(dr_layout)

        ans = QGroupBox("Choose")
        ans_a = QRadioButton("A")
        ans_b = QRadioButton("B")
        ans_c = QRadioButton("C")
        ans_a.setChecked(True)

        ans_layout = QVBoxLayout()
        ans_layout.addWidget(ans_a)
        ans_layout.addWidget(ans_b)
        ans_layout.addWidget(ans_c)
        ans.setLayout(ans_layout)

        box_layout = QHBoxLayout()
        box_layout.addWidget(os)
        box_layout.addWidget(drinks)
        box_layout.addWidget(ans)
        self.setLayout(box_layout)

    def wind_box_toggled(self, checked):
        if checked:
            print("windows checked")

    def lin_box_toggled(self, checked):
        pass

    def mac_box_toggled(self, check):
        pass
