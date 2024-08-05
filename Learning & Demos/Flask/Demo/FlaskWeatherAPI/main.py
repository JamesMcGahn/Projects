import pandas as pd
from flask import Flask, render_template

app = Flask("__name__")

stations = pd.read_csv("data_small/stations.txt", skiprows=17)
print(stations.columns)
stations = stations[["STAID", "STANAME                                 "]][0:5]


@app.route("/")
def home():
    return render_template("home.html", data=stations.to_html())


@app.route("/api/v1/<station>/<date>")
def stationdate(station, date):
    filename = "data_small/TG_STAID" + str(station).zfill(6) + ".txt"
    df = pd.read_csv(filename, skiprows=20, parse_dates=["    DATE"])

    temperature = df.loc[df["    DATE"] == date]["   TG"].squeeze() / 10
    return {"station": station, "date": date, "temperature": temperature}


@app.route("/api/v1/<station>")
def station(station):
    filename = "data_small/TG_STAID" + str(station).zfill(6) + ".txt"
    df = pd.read_csv(filename, skiprows=20, parse_dates=["    DATE"])
    return df.to_dict(orient="records")


@app.route("/api/v1/yearly/<station>/<year>")
def station_yearly(station, year):
    filename = "data_small/TG_STAID" + str(station).zfill(6) + ".txt"
    df = pd.read_csv(filename, skiprows=20)
    df["    DATE"] = df["    DATE"].astype(str)
    result = df[df["    DATE"].str.startswith(str(year))]
    return result.to_dict(orient="records")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
