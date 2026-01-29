import java.util.Scanner;

public class ConditionalsDemoBasicIfElse {
    public static void main(String[] args) {
        int minVotingAge = 18;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter age:");
        int age = scanner.nextInt();

        System.out.println("Min voting age: " + minVotingAge);

        boolean eligible = age >= minVotingAge;

        if (eligible) {
            System.out.println("Eligible to vote");

        } else {
            System.out.println("Not Eligible");
        }
        scanner.close();
    }

}
