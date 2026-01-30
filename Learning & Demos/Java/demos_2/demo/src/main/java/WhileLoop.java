import java.util.Scanner;

public class WhileLoop {
    public static void main(String[] args) {
        boolean done = false;
        Scanner scanner = new Scanner(System.in);

//        while (!done) {
//            System.out.println("WOOOOooooOOO");
//            System.out.println("done ?");
//            String response = scanner.nextLine();
//            if (response.equalsIgnoreCase("y")) {
//                done = true;
//            }
//            System.out.println();
//        }

        do {

            System.out.println("Hellp");
            System.out.println("WOOOOooooOOO");
            System.out.println("done ?");
            String response = scanner.nextLine();
            if (response.equalsIgnoreCase("y")) {
                done = true;
            }
        }
        while (!done);

        scanner.close();

    }
}
