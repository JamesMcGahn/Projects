package Basics;

public class Arrays2D {
    public static void main(String[] args) {
        String[][] cars = new String[3][3];

        cars[0][0] = "Camaro";
        cars[0][1] = "Corvette";
        cars[0][2] = "Silverado";
        cars[1][0] = "Mustang";
        cars[1][1] = "Focus";
        cars[1][2] = "Highlander";
        cars[2][0] = "Civic";
        cars[2][1] = "Ultimia";
        cars[2][2] = "Ridgeline";
        for (int i = 0; i < cars.length; i++) {
            System.out.println("");
            for (int j = 0; j < cars[i].length; j++) {
                System.out.println(cars[i][j]);
            }
        }

    }
}