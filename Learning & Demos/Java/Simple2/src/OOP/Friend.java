package OOP;

public class Friend {
    static int numberOfFriends;
    String name;

    Friend(String name) {
        this.name = name;
        numberOfFriends++;
    }

    static void displayFriendNumber() {
        System.out.println("Number of friends " + numberOfFriends);
    }
}
