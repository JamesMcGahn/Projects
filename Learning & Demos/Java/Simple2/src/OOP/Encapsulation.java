package OOP;

public class Encapsulation {
    public static void main(String[] args) {
        // encapsulation = attributes of a class will be hidden or private
        // can be accessed only through methods (setters & getters)
        // you should make attributes private if you dont have a reason to make them
        // public/protected
        Car5 car = new Car5("Honda", "Civic", 2020);
        // System.out.print(car.make); The field Car5.make is not visible
        System.out.println(car.getMake());
        System.out.println(car.getModel());
        System.out.println(car.getYear());
        car.setYear(2023);
        System.out.println(car.getYear());

    }
}
