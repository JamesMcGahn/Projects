class IDEController:
    @staticmethod
    def make_selection(data, msg):
        selection = None
        while selection not in range(1, len(data) + 1):
            try:
                selection = int(input(f"{msg}: "))
                if selection not in range(1, len(data) + 1):
                    print("Thats not a valid selection. Enter a number listed above.")
            except ValueError:
                print("What you entered is not a number. Please try again.")
                continue
        return selection - 1

    @staticmethod
    def list_options(data, msg, fn):
        count = 1
        print(msg)
        for x in data:
            fn(x, count)
            count += 1
