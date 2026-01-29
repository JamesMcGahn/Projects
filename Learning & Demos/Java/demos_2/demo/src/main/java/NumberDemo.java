import java.util.Scanner;

public class NumberDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter Exam one grade: ");
        double exam1 = scanner.nextDouble();
        System.out.println("Enter Exam two grade: ");
        double exam2 = scanner.nextDouble();
        System.out.println("Enter Exam three grade: ");
        double exam3 = scanner.nextDouble();

        double gradeAverage = (exam1 + exam2 + exam3) / 3;

        System.out.println("exam1 " + exam1);
        System.out.println("exam2 " + exam2);
        System.out.println("exam2 " + exam3);
        System.out.println("grade avg " + gradeAverage);
        System.out.println("grade avg " + String.format("%.2f", gradeAverage));
    }
}
