package OOP;

public class Polymorphism {

    // polymorphism = many - forms
    // the ability of an object to identify as more than one type
    public static void main(String[] args) {
        Car3 car = new Car3();
        Unicyle uni = new Unicyle();
        Boat boat = new Boat();
        Bike bike = new Bike();

        Vechile[] racers = { car, uni, boat, bike };

        for (Vechile x : racers) {
            x.go();
        }
    }
}
