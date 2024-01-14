package Basics.InnerClasses;

public class Outside {
    String x = "Hello ";

    public class Inside {
        String y = "World";

        public void greeting() {
            System.out.println(x + y);
        }
    }
}
