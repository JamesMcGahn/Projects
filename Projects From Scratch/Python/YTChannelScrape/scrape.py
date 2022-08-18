import os
from csv import DictWriter
from time import sleep

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


def run_webdriver(url):
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get(url)
    sleep(3)
    print("Starting Scrape......")
    last_scroll_height = 0
    try:
        current_height = driver.execute_script(
            "return document.getElementById('content').scrollHeight"
        )
        count = 1
        while last_scroll_height != current_height:
            driver.execute_script(
                "window.scrollTo(0, document.getElementById('content').scrollHeight)"
            )
            last_scroll_height = current_height
            sleep(5)
            print(f"Scraping page number {count}...")
            current_height = driver.execute_script(
                "return document.getElementById('content').scrollHeight"
            )
            count += 1
        page_source = driver.page_source
        driver.close()
        print("Completed Scrape .....")
        return page_source
    except Exception:
        if "404" in driver.title:
            raise ValueError(
                "Cannot find that youtube channel. Please check the url structure or channel name"
            )
        else:
            raise RuntimeError("An error has occurred")


def write_html_file(filename, source):
    print("Writing Html Data to File")
    html_file = f"{filename}.html"
    file = open(html_file, "w")
    file.write(source)
    file.close()
    print("Completed Html Data Writing")


def scrape_html(filename, ignore_shorts):
    data = open(f"./{filename}.html", "r")
    soup = BeautifulSoup(data, "html.parser")
    all_videos = soup.find_all("ytd-grid-video-renderer")
    video_collection = []
    print("Starting Parsing Html Data...")
    for video in all_videos:
        vid_length = video.find(id="thumbnail").find(id="text").get_text("", strip=True)
        if "shorts" in vid_length.lower() and ignore_shorts is True:
            continue
        vid = {
            "Title": video.find("h3").get_text(),
            "Video Url": f"www.youtube.com{video.find(id='thumbnail')['href']}",
            "Length": vid_length,
        }
        video_collection.append(vid)
    try:
        os.remove(f"./{filename}.html")
    except OSError as error:
        raise RuntimeError(error)
    print("Completed Parsing Data")
    return video_collection


def write_to_file(collection, filename):
    print("Writing Video Data to CSV")
    with open(f"{filename}.csv", "w") as file:
        headers = ["Title", "Video Url", "Length"]
        csv_writer = DictWriter(file, fieldnames=headers)
        csv_writer.writeheader()
        for video in collection:
            csv_writer.writerow(video)
    print("CSV File Completed")


def restart():
    again = ""
    while again.lower() not in ("y", "yes", "no", "n"):
        again = input("Would you like to scrape another channel? (y/n): ")
        if again.lower() in ("yes", "y"):
            return start()
        else:
            print("see you next time")


def start():
    url_choice = ""
    ignore_shorts = False
    valid_choices = ("1", "2", "quit")
    while url_choice.lower() not in valid_choices:
        print("Which Url structure is the channel?: ")
        print("1. https://www.youtube.com/c/{channel_name}/videos")
        print("2. https://www.youtube.com/channel/{channel_name}/videos")
        url_choice = input("Press 1 or 2: ")
        if url_choice.lower() == "quit":
            print("See you next time")
        elif url_choice.lower() not in valid_choices:
            print("Not a vaid choice")
        else:
            channel_name = input("Write the channel name: ")
            file_name = input("What should we name the .csv file?: ")
            ignore_shorts = input("Do you want to ignore Shorts? y/n: ")
            if ignore_shorts.lower() not in ("no", "n"):
                ignore_shorts = True

    if url_choice.lower() == "quit":
        return

    url_format = {
        "1": f"https://www.youtube.com/c/{channel_name}/videos",
        "2": f"https://www.youtube.com/channel/{channel_name}/videos",
    }
    try:
        source = run_webdriver(url_format[url_choice])
        write_html_file("html-file", source)
        video_collection = scrape_html("html-file", ignore_shorts)
        write_to_file(video_collection, file_name)
        restart()
    except Exception as e:
        print(e)


start()
