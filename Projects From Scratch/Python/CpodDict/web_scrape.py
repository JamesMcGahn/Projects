from time import sleep

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager


class WebScrape:
    def __init__(self, session):
        self.session = session
        self.cookies = session.get_cookies()
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    def init_driver(self):
        cookies = self.cookies
        url = self.session.get_session_url()
        try:
            self.driver.get(url)
            for c in cookies:
                self.driver.add_cookie(
                    {
                        "name": c.name,
                        "value": c.value,
                        "domain": c.domain,
                        "path": c.path,
                    }
                )

        except Exception as e:
            print(e)

    def run_webdriver(self, url):
        try:
            print("Starting Scrape......")
            self.driver.get(f"{url}#dialogue-tab")
            sleep(3)
            for link in ("Vocabulary", "Expansion", "Grammar"):
                try:
                    self.driver.find_element(By.LINK_TEXT, link).click()
                    sleep(3)
                except NoSuchElementException:
                    print(f"Lesson doesn't have a {link} section")

            page_source = self.driver.page_source
            print("Completed Scrape .....")
            return page_source
        except Exception as e:
            print(e)
            raise RuntimeError("An error has occurred")
