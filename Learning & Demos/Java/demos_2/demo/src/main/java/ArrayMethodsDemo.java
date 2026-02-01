import java.util.Arrays;

public class ArrayMethodsDemo {
    public static void main(String[] args) {

        int size = 5;
        int fillNum = 99;

        int[] intArr = new int[size];
        Arrays.fill(intArr, fillNum);
        displayArray(intArr);

        int[] myData = {99, 23, 12, 43, 5};
        displayArray(myData);
        Arrays.sort(myData);
        displayArray(myData);

        int searchInt = 12;
        int result = Arrays.binarySearch(myData, searchInt);

        boolean found = result > 0;
        System.out.println("result was found: " + found);
    }

    public static void displayArray(int[] arr) {
        System.out.println();
        for (int num : arr) {
            System.out.println(num);
        }
        System.out.println();
    }
}
