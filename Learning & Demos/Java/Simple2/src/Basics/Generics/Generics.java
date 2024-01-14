package Basics.Generics;

public class Generics {

    public static void main(String[] args) {

        Integer[] intArray = { 1, 2, 3, 4, 3, 5, 4, 3 };
        String[] stringArray = { "apple", "orange", "bannana", "burger", "taco" };

        displayArray(intArray);
        displayArray(stringArray);
        System.out.println(getT(intArray));
        System.out.println(getT(stringArray));

        GenericClass<String> r = new GenericClass<>("dog");
        GenericClass<Integer> s = new GenericClass<>(5);
        System.out.println(r.getValue());
        System.out.println(s.getValue());
    }

    public static <T> void displayArray(T[] arry) {
        for (T x : arry) {
            System.out.print(x + " ");
        }
        System.out.println("");
    }

    public static <T> T getT(T[] arry) {
        return arry[0];
    }

}
