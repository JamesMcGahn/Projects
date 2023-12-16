package OOP;

public class ObjectPassing {
    public static void main(String[] args) {

        Garage garage = new Garage();
        Car2 car = new Car2("BMW");
        Car2 car2 = new Car2("Toyota");

        garage.park(car);
        garage.park(car2);
    }
}
