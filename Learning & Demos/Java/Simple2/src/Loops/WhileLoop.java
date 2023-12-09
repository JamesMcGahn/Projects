package Loops;

import java.util.Scanner;

public class WhileLoop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = "";

        do {
            System.out.println("Enter name: ");
            name = scanner.nextLine();
        } while (name.isBlank());
    }

}
