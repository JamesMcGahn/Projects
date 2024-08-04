from flask import Flask, render_template

app = Flask("Website")


@app.route("/")
def home():
    return render_template("tut.html")


app.run(debug=True)
