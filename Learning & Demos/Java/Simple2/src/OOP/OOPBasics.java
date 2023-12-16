package OOP;

public class OOPBasics {
    // object = an instance of a class that many contain attributes and methods
    // example : phone, desk, computer
    public static void main(String[] args) {
        Car myCar = new Car();
        System.out.println(myCar.make);
        myCar.drive();
        myCar.brake();
    }

}
