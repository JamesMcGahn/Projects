public class Dog extends Animal {
    private String earShape;
    private String tailShape;

    public Dog() {
        super();
    }

    public Dog(String type, double weight) {
        this(type, weight, "Perky", "Curled");
    }

    public Dog(String type, double weight, String earShape, String tailShape) {
        super(type, weight < 15 ? "small" : weight < 35 ? "medium" : "large", weight);
        this.earShape = earShape;
        this.tailShape = tailShape;
    }

    @Override
    public String toString() {
        return "Dog{" + "earShape='" + earShape + '\'' + ", tailShape='" + tailShape + '\'' + "} " + super.toString();
    }

    @Override
    public void makeNoise() {
        if (type == "Wolf") {
            System.out.println("OWWWWWWW");

        }
        bark();
        System.out.println("");
    }

    @Override
    public void move(String speed) {
        super.move(speed);
        System.out.println("woof Woof");
        if (speed == "slow") {
            walk();
            wagTail();
        } else {
            run();
            bark();
        }
    }

    private void bark() {
        System.out.println("Woof!!");
    }

    private void run() {
        System.out.println("Dog Run!!");
    }

    private void walk() {
        System.out.println("Dog Walking!!");
    }

    private void wagTail() {
        System.out.println("Dog Wagging Tail!!");
    }

}
