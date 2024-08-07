import imghdr
import os
import smtplib
import ssl
from email.message import EmailMessage

from dotenv import load_dotenv

load_dotenv()


def send_email(image):
    email_message = EmailMessage()
    email_message["Subject"] = "New customer showed up"
    email_message.set_content("New movement")

    with open(image, "rb") as f:
        content = f.read()
    email_message.add_attachment(
        content, maintype="image", subtype=imghdr.what(None, content)
    )

    username = os.getenv("USERNAME")
    password = os.getenv("PASSWORD")

    host = "smtp.gmail.com"
    port = 465

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(host, port, context=context) as server:
        server.login(username, password)
        server.sendmail(username, username, email_message.as_string())


if __name__ == "__main__":
    send_email("images/19.png")
