package Basics;

public class Switches {
    public static void main(String[] args) {
        String day = "Fri";

        switch (day) {
            case "Sun":
                System.out.println("Sunday");
                break;
            case "Mon":
                System.out.println("Monday");
                break;
            case "Tues":
                System.out.println("Tuesday");
                break;
            case "Wed":
                System.out.println("Wednesday");
                break;
            case "Thurs":
                System.out.println("Thursday");
                break;
            case "Fri":
                System.out.println("Friday");
                break;
            case "Sat":
                System.out.println("Saturday");
                break;
            default:
                System.out.println("Holiday");
        }
    }
}
