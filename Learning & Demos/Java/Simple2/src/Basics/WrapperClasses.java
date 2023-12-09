package Basics;

public class WrapperClasses {
    public static void main(String[] args) {

        // provides a way to use primitive data types as reference types.
        // ref types contain useful methods,can be used with collections
        // downside is it takes more steps to access the values it contains - ex number
        // intensive program that uses millions of numbers

        // primitive = boolean, char, int,double,
        // wrapper = Boolean, Character, Integer, Double

        // autoboxing = auto conversion that compiler makes between primitive and their
        // corresponding wrapper class
        // unboxing = reverse of autoboxing. Automatic conversion of wrapper class to
        // primitive

        Boolean a = true;
        Character b = '@';
        Integer i = 10;
        Double d = 3.14;
        String s = "string";

    }
}
