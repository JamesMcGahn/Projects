import java.util.Scanner;

public class ScannerInput {

    public static void main(String[] args) {
        System.out.println(getInputFromScanner(2023));
    }

    public static String getInputFromScanner(int currentYear) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Hi whats your name?");
        String name = scanner.nextLine();

        System.out.println("hi " + name);

        System.out.println("What year were you born?");
        boolean validDob = false;
        int age = 0;
        do {
            System.out.println("Enter a year of birth >= " + (currentYear - 125) + " and <= " + currentYear);

            try {
                age = checkData(currentYear, scanner.nextLine());
                validDob = age < 0 ? false : true;

            } catch (NumberFormatException e) {
                System.out.println("No Characters Allowed");

            }

        } while (!validDob);

        return "You are " + age;
    }

    public static int checkData(int currentYear, String dateOfBirth) {
        int dob = Integer.parseInt(dateOfBirth);
        int minYear = currentYear - 125;

        if ((dob < minYear) || (dob > currentYear)) {
            return -1;
        }

        return (currentYear - dob);
    }
}
