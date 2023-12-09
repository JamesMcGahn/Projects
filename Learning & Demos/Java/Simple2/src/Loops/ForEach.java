package Loops;

import java.util.ArrayList;

public class ForEach {

    public static void main(String[] args) {
        String[] animals = { "cat", "dog", "horse", "turtle" };

        for (String i : animals) {
            System.out.println(i);
        }

        ArrayList<String> animals2 = new ArrayList<String>();
        animals2.add("monkey");
        animals2.add("cat");

        for (String i : animals2) {
            System.out.println(i);
        }

    }

}
