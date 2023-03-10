public class WhileLoops {

    public static void main(String[] args) {

        int j = 1;

        while (j <= 5) {
            System.out.println(j);
            j++;
        }
        int k = 1;

        while (true) {
            if (k > 6) {
                break;
            }
            System.out.println(k);
            k++;
        }
        int r = 1;
        do {
            System.out.println(r + "r");
            r++;
        } while (r < 4);

        int num = 0;
        while (num < 50) {
            num += 5;
            if (num % 25 == 0) {
                continue;
            }
            System.out.print(num + "_");
        }

    }

}
