import os

import requests
from dotenv import load_dotenv
from sendemail import sendemail

load_dotenv()
topic = "telsa"
API_KEY = os.getenv("NEWSAPIKEY")
news_url = f"https://newsapi.org/v2/everything?q={topic}&from=2024-07-03&sortBy=publishedAt&language=en&apiKey={API_KEY}"

request = requests.get(news_url)
content = request.json()


message = "Subject: Today's News \n"
for article in content["articles"][:20]:
    if article["title"] or article["url"] is not None:
        message = (
            message
            + f'{article["title"]} \n {article["description"]} \n {article["url"]} \n\n'
        )

message = message.encode("utf-8")
sendemail(message)
