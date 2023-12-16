package OOP;

import java.util.Scanner;

public class DynamicPolymorphism {

    // polymorphism = many shapes/forms
    // dynamic = after compilation (during runtime)

    // camaro is a camaro, car and vehicle and an object
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Animal animal;

        System.out.println("What Animal do you want?");
        System.out.println("1=dog, 2= cat");
        int choice = scanner.nextInt();

        if (choice == 1) {
            animal = new Dog();
            animal.speak();
        } else if (choice == 2) {
            animal = new Cat();
            animal.speak();
        } else {
            animal = new Animal();
            animal.speak();

        }

    }
}
