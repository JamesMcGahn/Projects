import streamlit as st
from sendemail import send_email

with st.form(key="email_forms"):
    user_email = st.text_input("Your email address", key="email")
    raw_message = st.text_area("Your message", key="message")
    button = st.form_submit_button("submit")

    message = f"""\
Subject: New Email from {user_email}

From: {user_email}
{raw_message}
    """

    if button:
        send_email(message)
        st.info("Sent email")
