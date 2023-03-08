public class Switches {
    public static void main(String[] args) {

        int val = 5;
        switch (val) {
            case 1:
                System.out.println("val is 1");
                break;
            case 2:
                System.out.println("val is 2");
                break;
            case 3:
            case 4:
            case 5:
                System.out.println("val is 3 or 4 or 5");
                break;
            default:
                System.out.println("val was not 1-5");

        }

    }
}
