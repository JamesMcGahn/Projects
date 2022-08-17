import os
from time import sleep

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

def run_webdriver(channel_name, filename):
    driver = webdriver.Chrome("./chromedriver")
    driver.get(f"https://www.youtube.com/c/{channel_name}/videos")
    sleep(3)

    last_scroll_height = 0
    current_height = driver.execute_script(
        "return document.getElementById('content').scrollHeight"
    )

    while last_scroll_height != current_height:
        driver.execute_script(
            "window.scrollTo(0, document.getElementById('content').scrollHeight)"
        )
        last_scroll_height = current_height
        sleep(5)
        
        current_height = driver.execute_script(
            "return document.getElementById('content').scrollHeight"
        )
        
        print(last_scroll_height)
        print(current_height)

    html_file = f"{filename}.html"
    file = open(html_file, "w")
    file.write(driver.page_source)
    file.close()
    driver.close()


run_webdriver(
    "channel",
    "dss",
)

# videos and links
data = open("./dss.html", "r")
soup = BeautifulSoup(data, "html.parser")
all_videos = soup.find_all("ytd-grid-video-renderer")
for video in all_videos:
    print(video.find("h3").get_text())
    print(video.find(id="thumbnail")["href"])

os.remove("./dss.html")
