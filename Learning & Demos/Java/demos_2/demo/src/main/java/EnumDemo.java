import java.util.Scanner;

public class EnumDemo {
    public static void main(String[] args) {
        ComputerType myComputerType = null;
//        ComputerType computerType = ComputerType.LAPTOP;
        Scanner scanner = new Scanner(System.in);
        String userInput = scanner.nextLine().trim().toUpperCase();
        try {
            myComputerType = ComputerType.valueOf(userInput);

        } catch (IllegalArgumentException e) {
            System.out.println("Invalid type");
            System.exit(1);
        }


        String describe = switch (myComputerType) {
            case ComputerType.SMARTPHONE -> "phone";
            case ComputerType.TABLET -> "tablet";
            default -> "default case";
        };

        System.out.println(describe);
    }

}
