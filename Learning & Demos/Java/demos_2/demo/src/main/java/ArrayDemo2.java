import java.util.Scanner;

public class ArrayDemo2 {
    public static void main(String[] args) {

        double[] userInputGrades = readUserInputGrades();

        displayGrades(userInputGrades);

        System.out.println("Grade Average: " + computeAverage(userInputGrades));


    }

    private static void displayGrades(double[] userInputGrades) {
        System.out.println("You entered grades");

        for (double grade : userInputGrades) {
            System.out.println(grade);
        }
    }

    private static double[] readUserInputGrades() {
        Scanner scanner = new Scanner(System.in);
        double[] grades = new double[3];

        System.out.println("how many grades will you enter?");
        int numGrades = scanner.nextInt();
        double[] userInputGrades = new double[numGrades];
        for (int i = 0; i < userInputGrades.length; i++) {
            System.out.print("enter grade " + (i + 1) + " :");
            userInputGrades[i] = scanner.nextDouble();

        }
        scanner.close();
        return userInputGrades;
    }


    private static double computeAverage(double[] grades) {
        double grades_sum = 0;
        for (double grade : grades) {
            grades_sum += grade;
        }
        return grades_sum / grades.length;
    }


}
