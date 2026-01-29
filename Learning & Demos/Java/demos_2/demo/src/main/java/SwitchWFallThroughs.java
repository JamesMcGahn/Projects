public class SwitchWFallThroughs {
    public static void main(String[] args) {
        int month = 6;

        switch (month) {
            case 1:
            case 2:
            case 3:
            case 4:
                System.out.println("quarter 1");
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                System.out.println("quarter 2");
                break;

            default:
                System.out.println("default case");
        }
    }
}

