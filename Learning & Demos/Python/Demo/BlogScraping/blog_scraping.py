from csv import writer

import requests
from bs4 import BeautifulSoup

response = requests.get("https://www.rithmschool.com/blog")
soup = BeautifulSoup(response.text, "html.parser")
articles = soup.find_all("article")

with open("blog_data.csv", "w") as csv_file:
    csv_writer = writer(csv_file)
    csv_writer.writerow(["title", "link", "date"])
    for article in articles:
        article_a_tag = article.find("a")
        title = article_a_tag.get_text()
        link = article_a_tag["href"]
        pub_date = article.find("time")["datetime"]
        csv_writer.writerow([title, link, pub_date])
