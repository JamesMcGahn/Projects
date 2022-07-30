import requests

url = "https://icanhazdadjoke.com/search"
term = input("Let me tell you a joke. Give me a topic? ")
res = requests.get(url, headers={"Accept": "application/json"}, params={"term": term})

data = res.json()


if data["total_jokes"] > 0:
    print(f"There are a total of {data['total_jokes']} jokes. Here is one: ")
    print(f"{data['results'][0]['joke']}")
else:
    print(f"We can't find a joke for {term}. Try again")
