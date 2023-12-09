package Basics;

public class Conditionals {
    public static void main(String[] args) {

        int age = 18;

        if (age >= 50) {
            System.out.println("Discounted Age");
        } else if (age > 21) {
            System.out.println("Admitted");
        } else {
            System.out.println("Your are under age");
        }
    }
}
