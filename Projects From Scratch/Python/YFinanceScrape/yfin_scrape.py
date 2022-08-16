from csv import DictWriter
from time import sleep

import requests
from bs4 import BeautifulSoup


def get_market_sum():
    BASE_URL = "https://finance.yahoo.com"
    stocks = []
    response = requests.get(BASE_URL)
    s = BeautifulSoup(response.text, "html.parser")
    market_summary = s.find(id="market-summary").find_all("li")
    for stock in market_summary:
        stock_url = stock.find("a")["href"]
        res = requests.get(f"{BASE_URL}{stock_url}")
        s = BeautifulSoup(res.text, "html.parser")
        stock_name = s.find(id="quote-header-info").find("h1").get_text()
        quote_time = s.find(id="quote-market-notice").get_text()
        stock_quote = {
            "moniker": stock_name,
            "quote_time": quote_time,
            "regularMarketPrice": "",
            "regularMarketChange": "",
            "regularMarketChangePercent": "",
            "Previous Close": "N/A",
            "Open": "N/A",
            "Volume": "N/A",
            "Pre. Settlement": "N/A",
            "Settlement Date": "N/A",
            "Bid": "N/A",
        }
        fin_stream = s.find_all("fin-streamer")
        for fin in fin_stream:
            fields = (
                "regularMarketPrice",
                "regularMarketChange",
                "regularMarketChangePercent",
            )
            if fin["data-field"] in fields:
                stock_quote[fin["data-field"]] = fin["value"]

        quote_sum_table = s.find(id="quote-summary").find("tbody")
        for row in quote_sum_table:
            stock_quote[row.contents[0].get_text()] = row.contents[1].get_text()
        stocks.append(stock_quote)
        print(stock_quote)
        sleep(3)
    return stocks


def write_stock_quotes(market_quote):
    with open("quotes.csv", "w") as file:
        headers = [
            "moniker",
            "quote_time",
            "regularMarketPrice",
            "regularMarketChange",
            "regularMarketChangePercent",
            "Previous Close",
            "Open",
            "Volume",
            "Pre. Settlement",
            "Bid",
            "Settlement Date",
        ]
        display_headers = {
            "moniker": "Stock Symbol",
            "quote_time": "Time of Quote",
            "regularMarketPrice": "Market Price",
            "regularMarketChange": "Market Change",
            "regularMarketChangePercent": "Market Change Percent",
            "Previous Close": "Previous Close Price",
            "Open": "Open Price",
            "Volume": "Trading Volume",
            "Pre. Settlement": "Pre. Settlement",
            "Bid": "Bid",
            "Settlement Date": "Settlement Date",
        }
        csv_writer = DictWriter(file, fieldnames=headers)
        csv_writer.writerow(display_headers)
        for stock in market_quote:
            print(stock)
            csv_writer.writerow(stock)


market_quote = get_market_sum()
write_stock_quotes(market_quote)
