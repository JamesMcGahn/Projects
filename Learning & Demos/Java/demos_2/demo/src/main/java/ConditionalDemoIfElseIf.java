import java.util.Scanner;

public class ConditionalDemoIfElseIf {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Whats the score?");
        double score = scanner.nextDouble();
        double tierOne = 90.0;
        double tierTwo = 80.0;

        if (score >= tierOne) {
            System.out.println("wow you are great");
        } else if (score >= tierTwo) {
            System.out.println("ehh you should study more");
        } else {
            System.out.println("why bother");
        }
        scanner.close();
    }
}
