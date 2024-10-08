
package Basics;

import java.util.ArrayList;

public class ArrayLists {

    // ArrayList = resizable array
    // elements can be added and removed after compilation phase
    // can store reference data types

    public static void main(String[] args) {

        ArrayList<String> food = new ArrayList<String>();
        food.add("pizza");
        food.add("hamburger");
        food.add("hotdog");

        food.set(0, "sushi");
        food.remove("hotdog");
        food.add("cake");

        for (int i = 0; i < food.size(); i++) {
            System.out.println(food.get(i));
        }

    }
}
