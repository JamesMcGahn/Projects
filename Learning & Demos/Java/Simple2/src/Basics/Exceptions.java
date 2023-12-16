package Basics;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exceptions {
    // exception = an event that occurs during the execution of a program that
    // disrupts the flow of instructions
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {

            System.out.println("enter number to divide");
            int x = scanner.nextInt();
            System.out.println("enter number to divide by");
            int y = scanner.nextInt();

            int z = x / y;

            System.out.println("result: " + z);
        } catch (ArithmeticException e) {
            System.out.println("You cant divide by zero");
        } catch (InputMismatchException e) {
            System.out.println("Enter a number");
        } catch (Exception e) {
            System.out.println("something went wrong");
        } finally {
            scanner.close();
        }
    }

}
