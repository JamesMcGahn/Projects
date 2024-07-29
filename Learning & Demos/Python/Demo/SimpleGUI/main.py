import FreeSimpleGUI as sg
from zipcreator import make_archive

label1 = sg.Text("Select File")
input1 = sg.Input()
choose_btn1 = sg.FilesBrowse("Choose", key="files")

label2 = sg.Text("Select Destination")
input2 = sg.Input()
choose_btn2 = sg.FolderBrowse("Choose", key="folder")

compress_button = sg.Button("Compress")
output_label = sg.Text(key="output")

window = sg.Window(
    "File Compressor",
    layout=[
        [label1, input1, choose_btn1],
        [label2, input2, choose_btn2],
        [compress_button, output_label],
    ],
)

while True:
    event, values = window.read()
    filepaths = values["files"].split(";")
    folder = values["folder"]
    make_archive(filepaths, folder)
    window["output"].update(value="Compression Completed")

window.read()
window.close()
