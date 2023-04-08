public class Fish extends Animal {

    private int gills;
    private int fins;

    public Fish(String type, double weight, int gills, int fins) {
        super(type, "small", weight);
        this.gills = gills;
        this.fins = fins;
    }

    private void moveMuscles() {
        System.out.println("Fish muscles moving");
    }

    private void moveBackfin() {
        System.out.println("Fish backfin moving");
    }

    @Override
    public void move(String speed) {
        super.move(speed);
        moveMuscles();
        if (speed == "fast") {
            moveBackfin();
        } else {
            System.out.println("moving in a school of fish");
        }
        System.out.println("");
    }
}
