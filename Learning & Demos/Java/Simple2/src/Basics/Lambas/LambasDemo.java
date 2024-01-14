package Basics.Lambas;

public class LambasDemo {
    public static void main(String[] args) {
        MyInterface myInterface = (name) -> {
            System.out.println("Hello World");
            System.out.println("Hello World " + name);
        };
        MyInterface myInterface2 = (name) -> {
            System.out.println("Hello World");
            System.out.println("Tacos for " + name);
        };
        myInterface.message("Tony");
        myInterface2.message("Bob");

        new MyFrame();
    }
}
