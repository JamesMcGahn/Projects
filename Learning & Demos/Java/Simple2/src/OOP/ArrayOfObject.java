package OOP;

public class ArrayOfObject {
    public static void main(String[] args) {

        // Pizza[] box = new Pizza[3];

        Pizza myPizza = new Pizza("flat-bread", "marinara", "Mozzarella", "pepporoni");
        Pizza myPizza1 = new Pizza("deep dish", "marinara", "Mozzarella", "pepporoni");
        Pizza myPizza2 = new Pizza("bar style", "marinara", "Mozzarella", "pepporoni");

        // box[0] = myPizza;
        // box[1] = myPizza1;
        // box[2] = myPizza2;

        Pizza[] box = { myPizza, myPizza1, myPizza2 };

        System.out.println(box[0].bread);
        System.out.println(box[1].bread);
        System.out.println(box[2].bread);
    }

}
