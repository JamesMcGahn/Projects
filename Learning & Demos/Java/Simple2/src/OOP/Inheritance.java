package OOP;

public class Inheritance {
    public static void main(String[] args) {
        Car3 car = new Car3();
        Bike bike = new Bike();

        car.go();
        bike.stop();
        System.out.println(car.speed);
    }
}
