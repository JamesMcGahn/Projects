package Basics.Generics;

public class GenericClass<T> {
    T x;

    GenericClass(T x) {
        this.x = x;
    }

    public T getValue() {
        return x;
    }
}