from random import choice
from time import sleep

import requests
from bs4 import BeautifulSoup

all_quotes = []
base_url = "http://quotes.toscrape.com"
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

quote = choice(all_quotes)
remaining_guess = 4
print("Here is a quote")
print(quote["text"])
print(quote["author"])

guess = ""
while guess.lower() != quote["author"].lower() and remaining_guess > 0:
    print(f"Who said this? - Remaining Guesses: {remaining_guess}: \n")
    guess = input("Your Guess:")
    if guess.lower() == quote["author"].lower():
        print("you got it right!!!!")
        break
    remaining_guess -= 1
    if remaining_guess == 3:
        res = requests.get(f"{base_url}{quote['link']}")
        soup = BeautifulSoup(res.text, "html.parser")
        bday = soup.find(class_="author-born-date").get_text()
        place = soup.find(class_="author-born-location").get_text()
        print("here is a hint....")
        print(f"Author was born on {bday}{place}")
    elif remaining_guess == 2:
        print("here is a hint....")
        print(f"Author's first initial {quote['author'][0]}")
    elif remaining_guess == 1:
        author_last_inital = quote["author"].split(" ")[1][0]
        print("here is a hint....")
        print(f"Author's last initial {author_last_inital}")
    else:
        print(f"You ran out of guesses. Author is {quote['author']}")
