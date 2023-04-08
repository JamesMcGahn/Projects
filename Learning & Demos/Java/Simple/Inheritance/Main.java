public class Main {

    public static void main(String[] args) {
        Animal animal = new Animal("Generic Animal", "Huge", 400);
        doAnimalStuff(animal, "slow");

        Dog dog = new Dog();
        doAnimalStuff(dog, "fast");

        Dog yorkie = new Dog("Yorkie", 14);
        doAnimalStuff(yorkie, "fast");

        Dog retriever = new Dog("Lab", 65, "Floppy", "Swimmer");
        doAnimalStuff(retriever, "slow");

        Dog wolf = new Dog("Wolf", 95, "Upright", "bushy");
        doAnimalStuff(wolf, "slow");

        Fish goldfish = new Fish("Goldfish", 1, 2, 3);
        doAnimalStuff(goldfish, "slow");
    }

    public static void doAnimalStuff(Animal animal, String speed) {
        animal.makeNoise();
        animal.move(speed);
        System.out.println(animal);
        System.out.println("__________________");
    }
}
