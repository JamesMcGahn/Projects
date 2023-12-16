package OOP;

public class SuperKeyword {

    // super = keyword refers to the super class (parent) of an object
    // very similar to the this keyword
    public static void main(String[] args) {
        Person person = new Person("Not Hank", 22);
        Hero hero = new Hero("Hank", 23, "flying");

        System.out.println(person.name);
        System.out.println(hero.name);
        System.out.println(hero.toString());
    }
}
