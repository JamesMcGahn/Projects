import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        int upperBound = 5;

        Random random = new Random();
        int secretNum = random.nextInt(upperBound) + 1;

        int maxAttempts = 3;
        System.out.println("Number guessing game");
        System.out.println("Guess the number from 1 to " + upperBound);
        System.out.println("You have " + maxAttempts + "guesses");

        Scanner scanner = new Scanner(System.in);
        while (maxAttempts != 0) {
            System.out.print("take a guess:");
            int userGuess = scanner.nextInt();

            if (userGuess == secretNum) {
                System.out.println("You Guessed it");
                break;
            } else {
                System.out.println("Nope thats not it");
                maxAttempts -= 1;
            }

        }
        System.out.println("The number was " + secretNum);
        scanner.close();
    }
}
