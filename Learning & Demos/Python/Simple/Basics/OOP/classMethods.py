class User:
    active_users = 0

    @classmethod
    def display_active_users(cls):
        return f"{cls.active_users} - active users"

    @classmethod
    def from_string(cls, data_string):
        first, last, age = data_string.split(",")
        return cls(first, last, int(age))

    def __init__(self, first, last, age):
        self.first = first
        self.last = last
        self.age = age
        User.active_users += 1

    def __repr__(self):
        return f"{self.full_name()}"

    def logout(self):
        User.active_users -= 1
        return f"{self.full_name()} has been logged out"

    def full_name(self):
        return f"{self.first} {self.last}"

    def initials(self):
        return f"{self.first[0].upper()}.{self.last[0].upper()}."

    def likes(self, thing):
        return f"{self.first} likes {thing}"


print(User.display_active_users())

sue = User.from_string("Sue,Prichet,12")
print(sue.first)

# repr
tom = User.from_string("Tom,Frank,45")
print(tom)
