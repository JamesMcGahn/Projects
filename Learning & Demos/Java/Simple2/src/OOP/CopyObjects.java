package OOP;

public class CopyObjects {
    public static void main(String[] args) {
        Car5 car1 = new Car5("Chevy", "Camaro", 2021);
        Car5 car2 = new Car5("Ford", "Mustang", 2023);

        // car2 = car1; pointing to the same value in memory

        Car5 car3 = new Car5(car2); // using copy constructor
        car2.copy(car1); // using copy method

        System.out.println(car1);
        System.out.println(car2);
        System.out.println(car3);
        System.out.println();
        System.out.println(car1.getMake());
        System.out.println(car1.getModel());
        System.out.println(car1.getYear());
        System.out.println();
        System.out.println(car2.getMake());
        System.out.println(car2.getModel());
        System.out.println(car2.getYear());
        System.out.println();
        System.out.println(car3.getMake());
        System.out.println(car3.getModel());
        System.out.println(car3.getYear());

    }
}
