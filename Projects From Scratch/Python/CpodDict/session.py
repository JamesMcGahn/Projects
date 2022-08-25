from time import sleep

import requests
from bs4 import BeautifulSoup


class Session:
    session = requests.Session()

    def __init__(self, ses_url, email, password):
        self.ses_url = ses_url
        self.payload = {"email": email, "password": password}

    def __repr__(self):
        return f"session for {self.ses_url}"

    def get_session(self):
        Session.session.post(self.ses_url, data=self.payload)
        return self.session

    def get_html(self, url, word):
        print(f"Getting HTML for {word}...")
        req = Session.session.get(f"{url}{word}")
        soup = BeautifulSoup(req.text, "html.parser")
        sleep(10)
        return soup
