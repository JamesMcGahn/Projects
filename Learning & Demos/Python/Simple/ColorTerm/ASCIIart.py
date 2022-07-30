from pyfiglet import figlet_format
from termcolor import colored


def print_color(msg, color):
    valid_colors = ("red", "green", "blue", "yellow", "magenta", "cyan", "white")
    if color not in valid_colors:
        color = "red"

    ascii = figlet_format(msg)
    colored_art = colored(ascii, color=color)
    print(colored_art)


msg = input("What would you like to print? ")
color = input("What color? ")
print_color(msg, color)
