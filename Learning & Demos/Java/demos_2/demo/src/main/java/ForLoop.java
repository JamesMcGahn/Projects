public class ForLoop {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            System.out.println("Hellp World");
        }
        for (int i = 0; i < 50; i = i + 5) {
            System.out.println(i);
        }

        for (int i = 50; i > 0; i = i - 5) {
            if (i == 25) {
                System.out.println("Breaking");
                break;
            }
            System.out.println(i);
        }

        for (int row = 1; row <= 5; row++) {
            for (int col = 1; col <= 5; col++) {
                int value = row * col;
                System.out.print(value + "\t");
            }
            System.out.println();
        }

    }
}
