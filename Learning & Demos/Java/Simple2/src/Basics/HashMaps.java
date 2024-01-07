package Basics;

import java.util.HashMap;

public class HashMaps {
    public static void main(String[] args) {

        // Hashmaps implements the Map interface
        // hasmaps are similar to ArrayList, but with key value pairs
        // stores objects, need to use Wrapper Class
        // ex: (name, email), (username, userId),(country, capital)

        HashMap<String, String> countries = new HashMap<String, String>();

        // add a key and value pair
        countries.put("USA", "Washington DC");
        countries.put("India", "New Delhi");
        countries.put("Russia", "Moscow");
        countries.put("China", "Beijing");

        System.out.println(countries);

        countries.remove("USA");
        System.out.println(countries);

        System.out.println(countries.get("China"));
        countries.put("USA", "Washington DC");
        countries.replace("USA", "Detriot");
        System.out.println(countries.size());

        System.out.println(countries.containsKey("England"));
        System.out.println(countries.containsValue("Moscow"));

        for (String i : countries.keySet()) {
            System.out.print(i + "\t" + " = ");
            System.out.println(countries.get(i));
        }

        countries.clear();
        System.out.println(countries.size());
    }
}
