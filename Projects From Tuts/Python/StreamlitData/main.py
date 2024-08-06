import plotly.express as px
import streamlit as st
from be import get_data

st.title("Weather Forecast for the Next Days")
place = st.text_input("Place: ")
days = st.slider(
    "Forecast Days",
    min_value=1,
    max_value=5,
    help="Select the number of forecasted days",
)

option = st.selectbox("Select data to view", ("Temperature", "Sky"))
st.subheader(f"{option} for the next {days} days in {place}")
try:
    weather_data = get_data(place, days)

    if place:
        if option == "Temperature":
            filtered_data = [dict["main"]["temp"] / 10 for dict in weather_data]
            dates = [dict["dt_txt"] for dict in weather_data]
            figure = px.line(
                x=dates, y=filtered_data, labels={"x": "Date", "y": "Temperature (C)"}
            )
            st.plotly_chart(figure)

        if option == "Sky":
            images = {
                "Clear": "images/clear.png",
                "Clouds": "images/cloud.png",
                "Rain": "images/rain.png",
                "Snow": "images/snow.png",
            }
            filtered_data = [dict["weather"][0]["main"] for dict in weather_data]
            image_paths = [images[condition] for condition in filtered_data]
            st.image(image_paths, width=115)
except KeyError:
    st.error("That place does not exist")
