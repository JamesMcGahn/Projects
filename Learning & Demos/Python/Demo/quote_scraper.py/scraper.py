from csv import DictReader
from random import choice

import requests
from bs4 import BeautifulSoup

base_url = "http://quotes.toscrape.com"


def read_quotes(filename):
    with open(filename, "r") as file:
        csv_reader = DictReader(file)
        return list(csv_reader)


def start_game(quotes):
    quote = choice(quotes)
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

    again = ""

    while again.lower() not in ("y", "yes", "no", "n"):
        again = input("Would you like to play again? (y/n): ")
    if again.lower() in ("yes", "y"):
        return start_game(quotes)
    else:
        print("see you next time")


quotes = read_quotes("quotes.csv")
start_game(quotes)
