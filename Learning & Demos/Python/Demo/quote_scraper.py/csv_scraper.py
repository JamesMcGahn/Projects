from csv import DictWriter
from time import sleep

import requests
from bs4 import BeautifulSoup

base_url = "http://quotes.toscrape.com"


def scrape_quotes():
    all_quotes = []
    page_url = "/page/1"

    while page_url:
        res = requests.get(f"{base_url}{page_url}")
        soup = BeautifulSoup(res.text, "html.parser")
        quotes = soup.find_all(class_="quote")
        print(f"scrape on page - {page_url}")
        for quote in quotes:
            all_quotes.append(
                {
                    "text": quote.find(class_="text").get_text(),
                    "author": quote.find(class_="author").get_text(),
                    "link": quote.find("a")["href"],
                }
            )
        next_btn = soup.find(class_="next")
        page_url = next_btn.find("a")["href"] if next_btn else None
        sleep(3)
    return all_quotes


def write_quotes(quotes):
    with open("quotes.csv", "w") as file:
        headers = ["text", "author", "link"]
        csv_writer = DictWriter(file, fieldnames=headers)
        csv_writer.writeheader()
        for quote in quotes:
            csv_writer.writerow(quote)


quotes = scrape_quotes()
write_quotes(quotes)
