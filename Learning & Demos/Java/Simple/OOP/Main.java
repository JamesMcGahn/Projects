public class Main {
    public static void main(String[] args) {
        Car car2 = new Car();
        Car car = new Car("tesla", "ooo", "black", 4, false);
        Car car3 = new Car("chevy", "tahoe");
        car.describeCar();
        car.setDoors(2);
        car.setMake("Porsche");
        car.setModel("Carrera");
        car.setColor("Red");
        car.setConvertible(false);
        car.describeCar();
        car2.describeCar();
        car3.describeCar();
    }
}
