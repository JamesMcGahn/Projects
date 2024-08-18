from PySide6.QtCore import QByteArray, QJsonArray, QJsonDocument, QUrl
from PySide6.QtNetwork import QNetworkAccessManager, QNetworkReply, QNetworkRequest
from PySide6.QtWidgets import QWidget
from widget_ui import Ui_Widget


class Widget(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle("JSON API Demo")

        self.net_manager = QNetworkAccessManager(self)
        self.m_data_buffer = QByteArray()
        self.request = QNetworkRequest()
        self.request.setUrl(QUrl("https://jssonplaceholder.typicode.com/posts"))

        # The download is triggered when we click on the button
        self.fetch_button.clicked.connect(self.fetch_button_clicked)

    def fetch_button_clicked(self):
        # Supprised that we can do this in python. Declare class members in a method!!!
        self.net_reply = self.net_manager.get(self.request)
        self.net_reply.readyRead.connect(self.data_ready_to_read)
        self.net_reply.finished.connect(self.data_read_finished)

    def data_ready_to_read(self):
        print("Some data available")
        self.m_data_buffer.append(self.net_reply.readAll())

    def data_read_finished(self):
        print("Data read finished")
        if (
            self.net_reply.error()
            and self.net_reply.error() is not QNetworkReply.NetworkError.NoError
        ):
            print("Some error occured")
        else:
            doc = QJsonDocument.fromJson(self.m_data_buffer)
            array = QJsonArray(doc.array())
            for i in range(array.count()):
                object = array.at(i).toObject()
                text = "[" + str(i) + "] :" + str(object["title"])
                self.listWidget.addItem(text)
