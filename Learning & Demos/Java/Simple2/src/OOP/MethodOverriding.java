package OOP;

public class MethodOverriding {
    // method overriding = Declaring a mehtod in sub class, which is already present
    // in parent class
    // so that child class can give its own implementation

    public static void main(String[] args) {
        Car3 car = new Car3();
        Unicyle uni = new Unicyle();

        car.go();
        uni.go();
    }
}
