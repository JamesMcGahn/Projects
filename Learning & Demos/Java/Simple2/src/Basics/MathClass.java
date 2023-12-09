package Basics;

public class MathClass {
    public static void main(String[] args) {

        double x = 3.14;
        double y = -1;

        double z = Math.max(x, y);
        double a = Math.min(x, y);
        double b = Math.abs(y);
        double c = Math.sqrt(x);

        System.out.println(z);
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

    }
}
