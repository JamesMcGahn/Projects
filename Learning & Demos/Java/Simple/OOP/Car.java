public class Car {
    private String make;
    private String model;
    private String color;
    private int doors;
    private boolean isConvertible;

    public Car() {
        this("unknown", "unknown", "unknown", 0, false);
    }

    public Car(String make, String model, String color, int doors, boolean isConvertible) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.doors = doors;
        this.isConvertible = isConvertible;
    }

    public Car(String make, String model) {
        this(make, model, "unknown", 0, false);
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors) {
        this.doors = doors;
    }

    public boolean isConvertible() {
        return isConvertible;
    }

    public void setConvertible(boolean isConvertible) {
        this.isConvertible = isConvertible;
    }

    public void describeCar() {
        System.out.println(doors + "-Door " + color + " " + make + " " + model + " "
                + (isConvertible ? "Convertible" : ""));
    }
}
