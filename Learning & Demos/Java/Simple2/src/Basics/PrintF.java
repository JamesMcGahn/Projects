package Basics;

public class PrintF {
    public static void main(String[] args) {
        // % [flags] [precision] [width] [conversion-character]

        // %d - int
        // %b - boolean
        // %c - character
        // %s - string
        // %f - float/double

        System.out.printf("This is a formatted String %d", 123);
        System.out.printf("This is a formatted String boolean %b", true);
        System.out.printf("This is a formatted String char %c", 'A');
        System.out.printf("This is a formatted String string %s", "TEST");
        System.out.printf("This is a formatted String float and double %f", 12.45);

        // [width] min num of chars to be displayed
        System.out.printf("This is a %10s formatted String", "WOO");
        // left justified
        System.out.printf("This is a %-10s formatted String", "WOO");

        // [precision]
        // set number of digits of precision for floating point values
        System.out.printf("This is a %.2f formatted", 12.456);
    }

}
