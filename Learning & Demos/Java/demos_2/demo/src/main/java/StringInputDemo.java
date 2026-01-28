import java.util.Scanner;

public class StringInputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your favorite color?");

        String theColor = scanner.nextLine();
        System.out.println("What is your hobby?");
        String theHobby = scanner.nextLine();

        System.out.println("My hobby is " + theHobby);
        System.out.println("My favorite color is " + theColor);

        scanner.close();
    }
}
