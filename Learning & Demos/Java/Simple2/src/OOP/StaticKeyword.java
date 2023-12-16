package OOP;

public class StaticKeyword {
    public static void main(String[] args) {

        // static = modifer , a single copy of a variable/method is created and shared,
        // the class "owns" the static member
        Friend bob = new Friend("Bob");
        Friend hank = new Friend("Hank");
        Friend tony = new Friend("Tony");

        System.out.println(Friend.numberOfFriends);
        Friend.displayFriendNumber();
    }
}
