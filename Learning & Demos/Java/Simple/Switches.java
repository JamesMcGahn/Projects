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

        int newSwitch = 2;

        switch (newSwitch) {
            case 1 -> System.out.println("val is 1");
            case 2 -> System.out.println("val is 2");
            case 3, 4, 5 -> System.out.println("val is 3 or 4 or 5");
            default -> System.out.println("val was not 1-5");

        }

        System.out.println(returnOldSwitch("jan"));
        System.out.println(returnNewSwitch("mar"));
    }

    // can return the result whole switch
    // to return a value in a code block you must use yield
    public static String returnNewSwitch(String month) {
        return switch (month) {
            case "jan" -> "1";
            case "feb" -> "2";
            case "mar" -> {
                String newMon = month + "mar";
                yield newMon;
            }
            default -> "error";

        };
    }

    // each case has to have a return
    public static String returnOldSwitch(String month) {
        switch (month) {
            case "jan":
                return "1";
            case "feb":
                return "2";
            default:
                return "error";
        }
    }
}
