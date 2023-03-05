public class Conditionals {
    public static void main(String[] args) {

        boolean isAlien = false;
        if (isAlien == false) {
            System.out.println("Not an Alien");
        } else {
            System.out.println("Alien");
        }

        int topScore = 100;
        int score = 100;

        if (topScore == 100 && score == 100) {
            System.out.println("top score");
        }

        if (topScore > 100 || score > 90) {
            System.out.println("good job");
        }

        boolean car = false;
        if (!car) {
            System.out.println("Not a car");
        }

        // ternary

        String makeOfCar = "Honda";
        boolean isDomestic = makeOfCar == "Honda" ? false : true;
        if (!isDomestic) {
            System.out.println("not a domestic car");
        }

    }
}