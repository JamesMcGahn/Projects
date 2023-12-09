package Basics;

import java.util.ArrayList;

public class ArrayLists2D {
    public static void main(String[] args) {

        ArrayList<ArrayList<String>> menu = new ArrayList<>();

        ArrayList<String> food = new ArrayList<String>();
        food.add("pizza");
        food.add("hamburger");
        food.add("hotdog");

        ArrayList<String> drinks = new ArrayList<String>();
        drinks.add("coke");
        drinks.add("water");
        drinks.add("diet coke");

        ArrayList<String> toppings = new ArrayList<String>();
        toppings.add("pepporoni");
        toppings.add("cheese");
        toppings.add("ketchup");

        menu.add(food);
        menu.add(drinks);
        menu.add(toppings);

        System.out.println(menu);
        System.out.println(menu.get(0).get(0));

    }
}
