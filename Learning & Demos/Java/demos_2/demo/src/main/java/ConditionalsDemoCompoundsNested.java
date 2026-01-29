import java.util.Scanner;

public class ConditionalsDemoCompoundsNested {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("whats the class count");
        int classCount = scanner.nextInt();
        int minClass = 2;
        int maxClass = 9;

        if (classCount < 9 && classCount > 2) {
            System.out.println("class count is okay");
            if (classCount % 2 == 0) {
                System.out.println("Selected even count of classes");
            }
        } else {
            System.out.println("class count is not okay");
        }
        scanner.close();
    }
}
