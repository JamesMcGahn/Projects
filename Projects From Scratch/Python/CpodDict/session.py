import pickle
from time import sleep, time

import requests
from bs4 import BeautifulSoup
from open_file import OpenFile
from write_file import WriteFile


class Session:
    session = requests.Session()

    def __init__(self, ses_url, email, password):
        self.ses_url = ses_url
        self.payload = {"email": email, "password": password}

    def __repr__(self):
        return f"session for {self.ses_url}"

    def get_session_url(self):
        return f"{self.ses_url}"

    def get_session(self):
        print("Getting New Session...")
        Session.session.post(self.ses_url, data=self.payload)
        return self.session

    def load_session(self):
        try:
            print("Loading Session...")
            cookies = OpenFile.open_pickle("./data/session.pickle")
            expired = False
            for cookie in cookies:
                if cookie.expires < time():
                    expired = True
            if expired or len(cookies) == 0:
                return self.get_session()
            else:
                self.set_cookies(cookies)
        except ValueError:
            print("Error loading session")
            return self.get_session()

    def save_session(self):
        print("Saving Session...")
        WriteFile.write_file(
            "./data/session.pickle", pickle.dumps(self.get_cookies()), "wb", True
        )

    def set_cookies(self, cookies):
        self.session.cookies = cookies

    def get_cookies(self):
        return self.session.cookies

    def get_html(self, url):
        print("Getting HTML...")
        req = Session.session.get(f"{url}")
        soup = BeautifulSoup(req.text, "html.parser")
        sleep(10)
        return soup
