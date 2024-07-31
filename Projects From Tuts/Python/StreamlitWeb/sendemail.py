import os
import smtplib
import ssl

from dotenv import load_dotenv

load_dotenv()


def send_email(message):
    username = os.getenv("USERNAME")
    password = os.getenv("PASSWORD")

    host = "smtp.gmail.com"
    port = 465

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(host, port, context=context) as server:
        server.login(username, password)
        server.sendmail(username, username, message)
