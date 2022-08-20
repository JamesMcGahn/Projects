import sqlite3

conn = sqlite3.connect("friends.db")
c = conn.cursor()

# CREATE TABLE
# c.execute("CREATE TABLE friends (first_name TEXT, last_name TEXT, age INTEGER);")
# c.execute()
# conn.commit()
# conn.close()

# INSERT ONE
# insert_query = """INSERT INTO friends
#                     VALUES ('Frank', 'John', 95)"""
# c.execute(insert_query)
# conn.commit()
# conn.close()

# INSERT MANY

# BAD CODE -- do not use f strings -- BAD CODE --
# name = "John"
# query = f"INSERT INTO friends (first_name) VALUES ('{name}')"
# BAD CODE -- do not use f strings -- BAD CODE --

# BETTER WAY of INSERTING MANY
# name  = "Joe"
# query = "INSERT INTO friends (first_name) VALUES (?)"
# c.execute(query, (name,))

# data  = ("Bob", "Han", 45)
# query = "INSERT INTO friends  VALUES (?,?,?)"
# c.execute(query, data)

# INSERT MANY
people = [
    ("Roald", "Amundsen", 5),
    ("Henry", "Hudson", 7),
    ("Neil", "Armstrong", 7),
    ("Daniel", "Boone", 3),
]

# Insert all at once
# c.executemany("INSERT INTO friends VALUES (?,?,?)", people)

# Inserting with doing something with the data
# average = 0
# for person in people:
#     c.execute("INSERT INTO friends VALUES (?,?,?)", person)
#     average += person[2]
# print(average / len(people))

# Selecting

# c.execute("SELECT * FROM friends WHERE first_name IS 'Neil'")
# c.execute("SELECT * FROM friends WHERE age > 5 ORDER BY age")


# Iterate over cursor
# for result in c:
# 	print(result)

# Fetch One Result
# print(c.fetchone())

# Fetch all results as list
# print(c.fetchall())
