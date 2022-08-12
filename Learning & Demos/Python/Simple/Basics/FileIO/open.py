f = open("read.txt")
print(f.read())
f.seek(1)
print(f.read())
f.seek(0)
print(f.readline())
f.seek(0)
print(f.readlines())
f.close()

# auto closes
with open("read.txt") as f:
    data = f.read()

print(data)
