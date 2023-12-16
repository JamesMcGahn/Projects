package OOP;

public class Car5 {
    private String make;
    private String model;
    private int year;

    Car5(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    // copy constructor
    Car5(Car5 x) {
        this.setMake(x.getMake());
        this.setModel(x.getModel());
        this.setYear(x.getYear());
    }

    public String getMake() {
        return this.make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return this.model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void copy(Car5 x) {
        this.setMake(x.getMake());
        this.setModel(x.getModel());
        this.setYear(x.getYear());
    }
}
