package Basics;

public class Methods {
    public static void main(String[] args) {
        hello("Bob");
        int a = add(1, 2);
        System.out.println(a);
    }

    static void hello(String name) {
        System.out.println("Hello " + name);
    }

    static int add(int x, int y) {
        return x + y;
    }
}
