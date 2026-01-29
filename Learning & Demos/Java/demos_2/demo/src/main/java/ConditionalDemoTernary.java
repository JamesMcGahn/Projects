import java.util.Scanner;

public class ConditionalDemoTernary {
    public static void main(String[] args) {
        int minVotingAge = 18;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter age:");
        int age = scanner.nextInt();

        System.out.println("Min voting age: " + minVotingAge);

        String msg = (age >= minVotingAge) ? "Eligible to vote" : "Not Eligible";

        System.out.println(msg);

        scanner.close();
    }
}

