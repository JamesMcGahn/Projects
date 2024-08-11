import sys

# from button_holder import ButtonHolder
from PySide6.QtWidgets import QApplication
from slider_holder import SliderHolder

app = QApplication(sys.argv)

# window = ButtonHolder()
window = SliderHolder()
window.show()
app.exec()
