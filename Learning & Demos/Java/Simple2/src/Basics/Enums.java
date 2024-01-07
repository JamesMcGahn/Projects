package Basics;

enum Planet {
    MERUCRY(1), VENUS(2), EARTH(3), MARS(4), JUPITER(5), SATURN(6), URANUS(7), NEPTURE(8), PLUTO(9);

    int number;

    Planet(int number) {
        this.number = number;
    }
}

public class Enums {
    public static void main(String[] args) {
        // enum = enumerated (ordered listing of items in a collection)
        // grouping of constants that behave similarly to objects

        Planet pl = Planet.MARS;
        canILiveHere(pl);
    }

    static void canILiveHere(Planet pl) {
        switch (pl) {
            case EARTH:
                System.out.println("You can live here");

                break;
            default:
                System.out.println("You cant live here");
        }
        System.out.println("This is planet number " + pl.number);
    }
}
