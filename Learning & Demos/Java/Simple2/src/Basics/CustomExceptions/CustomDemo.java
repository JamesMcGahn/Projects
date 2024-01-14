package Basics.CustomExceptions;

import java.util.Scanner;

public class CustomDemo {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.println("Enter your age: ");
        int age = scan.nextInt();

        try {
            checkAge(age);
        } catch (Exception e) {
            System.out.println("A problem occured: " + e);
        }
    }

    static void checkAge(int age) throws CustomExceptions {
        if (age < 18) {
            throw new CustomExceptions("You must be at least 18 years old");
        } else {
            System.out.println("You are signed up");
        }
    }

}
