package Basics;

public class OverloadedMethods {
    public static void main(String[] args) {
        // share the same name but have different parameters
        // method name + parameters = method signature
        System.out.println(add(1, 2));
        System.out.println(add(1, 2, 3));
        System.out.println(add(1, 2, 3, 4));
        System.out.println(add(1.0, 2.6));
    }

    static int add(int a, int b) {
        System.out.println("overload 1");
        return a + b;
    }

    static int add(int a, int b, int c) {
        System.out.println("overload 2");
        return a + b + c;
    }

    static int add(int a, int b, int c, int d) {
        System.out.println("overload 3");
        return a + b + c + d;
    }

    static double add(double a, double b) {
        System.out.println("overload 4");
        return a + b;
    }

}
