package OOP;

public class Constructors {
    public static void main(String[] args) {
        Human human1 = new Human("Bob", 45, 45.4);
        Human human2 = new Human("Hank", 56, 45.4);

        human1.eat();
        human2.drink();
    }
}
