import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class HangmanGame {
    public static void main(String[] args) throws IOException {
        String fileName = "data/sample-words.txt";
        String secretWord = getRandomWord(fileName);

        int maxGuesses = 3;
        char[] gameboard = new char[secretWord.length()];
        Arrays.fill(gameboard, '_');

        System.out.println("Welcome to Hangman");
        displayBoard(gameboard);
        Scanner scanner = new Scanner(System.in);
        boolean gameWon = false;
        while (maxGuesses > 0) {
            System.out.print("Take a guess: ");
            System.out.println();
            String userInput = scanner.next().toUpperCase();
            char guess = userInput.charAt(0);
            boolean checkGuess = checkGuess(guess, secretWord, gameboard);
            if (checkGuess) {
                System.out.println("Great Guess ");
                displayBoard(gameboard);

                if (!boardContainsUnderScore(gameboard)) {
                    gameWon = true;
                    break;
                }

            } else {
                System.out.println("nope that's not it. try again");
                maxGuesses -= 1;
                System.out.println("You have " + maxGuesses + " guesses remaining");
            }

        }
        if (gameWon) {
            System.out.println("You WON!!!!");

        } else {
            System.out.println("You LOST!!!!");
        }
        System.out.println("The word was " + secretWord);
    }

    static boolean checkGuess(char guess, String word, char[] gameboard) {
        String wordUpper = word.toUpperCase();
        boolean correctGuess = false;
        for (int i = 0; i < wordUpper.length(); i++) {
            if (wordUpper.charAt(i) == guess) {
                gameboard[i] = guess;
                correctGuess = true;
            }
        }
        return correctGuess;
    }


    static void displayBoard(char[] gameboard) {
        System.out.println("The game board is:");
        for (char tile : gameboard) {
            System.out.print(tile + " ");
        }
        System.out.println();
    }

    static boolean boardContainsUnderScore(char[] gameboard) {
        for (char tile : gameboard) {
            if (tile == '_') {
                return true;
            }
        }
        return false;
    }

    static String getRandomWord(String filename) throws IOException {
        List<String> linesList = Files.readAllLines(Path.of(filename));

        String[] words = linesList.toArray(new String[0]);

        Random random = new Random();
        int randomInt = random.nextInt(words.length);
        return words[randomInt];
    }


}
