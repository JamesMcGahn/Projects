package OOP;

public class Car {
    String make = "Chevy";
    String model = "Corvette";
    int year = 2020;
    String color = "Red";
    double price = 50000.00;

    public String toString() {
        return this.make + "\n" + this.model + "\n" + this.year + "\n" + this.color;
    }

    public void drive() {
        System.out.println("Driving car" + make);
    }

    public void brake() {
        System.out.println("Braking the car");
    }
}
