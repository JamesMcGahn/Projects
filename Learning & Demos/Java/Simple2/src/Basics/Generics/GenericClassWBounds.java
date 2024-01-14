package Basics.Generics;

public class GenericClassWBounds<T extends Number, V> {
    // extends number so that only data of number type can be passed
    // V is not bound so it can receive any data type
    T x;
    V y;

    GenericClassWBounds(T x) {
        this.x = x;
    }

    public T getValue() {
        return x;
    }
}