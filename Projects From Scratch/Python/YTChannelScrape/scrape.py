import os
from time import sleep
from csv import DictWriter

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

def run_webdriver(channel_name, filename):
    driver = webdriver.Chrome("./chromedriver")
    driver.get(f"https://www.youtube.com/c/{channel_name}/videos")
    sleep(3)

    last_scroll_height = 0
    try:
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
            page_source = driver.page_source
            driver.close()
            print('made it here')
            return page_source
    except:
        if '404' in driver.title:
            print('Cannot find that youtube channel. Please check the url structure or channel name')
        else:
            print('An error has occurred')

def write_html_file(filename, source):
    html_file = f"{filename}.html"
    file = open(html_file, "w")
    file.write(source)
    file.close()
    


# videos and links
def scrape_html(filename):
    data = open(f"./{filename}", "r")
    soup = BeautifulSoup(data, "html.parser")
    all_videos = soup.find_all("ytd-grid-video-renderer")
    video_collection = []

    for video in all_videos:
        vid = {
            "Title": video.find("h3").get_text(),
            "Video Url": f"www.youtube.com/{video.find(id='thumbnail')['href']}"
        }
        video_collection.append(vid)
    try:
        os.remove(filename)
    except OSError as error:
        print(error)
        print("File can not be removed")
    
    return video_collection
    


def write_to_file(collection):
    with open("videos.csv", "w") as file:
        headers=["Title", "Video Url"]
        csv_writer = DictWriter(file, fieldnames=headers)
        csv_writer.writeheader()
        for video in collection:
            print(video)
            csv_writer.writerow(video)

videos = run_webdriver(
    "112222",
    "dss",
)

