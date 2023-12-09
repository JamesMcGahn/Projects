package Basics;

public class Arrays {
    public static void main(String[] args) {
        String[] trucks = { "Tahoe", "Avalanche", "Pilot" };
        String[] cars = new String[3];

        trucks[1] = "Highlander";

        cars[0] = "Camaro";
        cars[1] = "Corvette";
        cars[2] = "Tesla";

        for (int i = 0; i < cars.length; i++) {
            System.out.println(cars[i]);
        }
        for (int i = 0; i < trucks.length; i++) {
            System.out.println(trucks[i]);
        }
    }
}
