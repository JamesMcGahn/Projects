class User:
    active_users = 0

    def __init__(self, first, last, age):
        self.first = first
        self.last = last
        self.age = age
        User.active_users += 1

    def logout(self):
        User.active_users -= 1
        return f"{self.full_name()} has been logged out"

    def full_name(self):
        return f"{self.first} {self.last}"

    def initials(self):
        return f"{self.first[0].upper()}.{self.last[0].upper()}."

    def likes(self, thing):
        return f"{self.first} likes {thing}"


user1 = User("Bob", "Frank", 34)
user2 = User("Hank", "Spank", 54)

print(user1.initials())
print(user1.full_name())
print(user2.likes("cheese"))
print(User.active_users)
print(user1.logout())
print(User.active_users)
