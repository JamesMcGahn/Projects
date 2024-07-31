import pandas as pd
import streamlit as st

st.set_page_config(layout="wide")
col1, col2 = st.columns(2)

with col1:
    st.image("./images/photo.png")

with col2:
    st.title("John Johnny")
    content = """Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac facilisis risus.
     Phasellus et auctor dolor. In vestibulum dapibus mi. Quisque sem leo, iaculis vitae metus non, finibus tincidunt augue.
    Nulla facilisi. Proin bibendum sapien eget pretium mollis.
     Pellentesque molestie congue nulla non dapibus. Vestibulum cursus mollis diam, vitae auctor nisi.
"""
    st.info(content)

st.write(
    "Pellentesque molestie congue nulla non dapibus. Vestibulum cursus mollis diam, vitae auctor nisi.Vestibulum cursus mollis diam, vitae auctor nisi."
)

col3, empty, col4 = st.columns([1.5, 0.5, 1.5])

df = pd.read_csv("data.csv", sep=";")
with col3:
    for index, row in df[:10].iterrows():
        st.header(row["title"])
        st.write(row["description"])
        st.image(f'./images/{row["image"]}')
        st.write("[Source Code]()")

with col4:
    for index, row in df[10:].iterrows():
        st.header(row["title"])
        st.write(row["description"])
        st.image(f'./images/{row["image"]}')
        st.write("[Source Code]()")
