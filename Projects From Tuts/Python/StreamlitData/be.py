import os

import requests
from dotenv import load_dotenv

load_dotenv()


API_KEY = os.getenv("API_KEY")


def get_data(
    place,
    forecast_days,
):
    url = f"https://api.openweathermap.org/data/2.5/forecast?q={place}&appid={API_KEY}"
    res = requests.get(url)
    data = res.json()
    filtered_data = data["list"]

    data_length = forecast_days * 8  #  every 3 hours forecast
    filtered_data = filtered_data[:data_length]

    return filtered_data


if __name__ == "__main__":
    print(
        get_data(
            place="Tokyo",
            forecast_days=3,
        )
    )
