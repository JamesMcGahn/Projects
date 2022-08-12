with open("write.txt", "w") as file:
    file.write("I am writing to the file\n")
    file.write("this is the second line of the file\n")
    file.write("this is the third line of the file\n")
    file.write("end.")

# modes
# r read file
# w write to a file (prevs content is removed)
# a append to a file (prevs content is not removed)
# r+ read and write to a file based on the cursor - only works with a existing file
