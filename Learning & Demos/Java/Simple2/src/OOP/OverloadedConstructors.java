package OOP;

public class OverloadedConstructors {
    // overloaded constructors = multiple constructors within a class with the same
    // name but different params
    // name + params = signature

    public static void main(String[] args) {
        Pizza myPizza = new Pizza("flat-bread", "marinara", "Mozzarella", "pepporoni");
        Pizza myPizza2 = new Pizza("flat-bread", "marinara", "Mozzarella");
    }
}
