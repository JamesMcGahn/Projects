package Basics.AnnonymousClasses;

public class AnnonymousClasses {
    public static void main(String[] args) {
        Greeting greeting = new Greeting() {
            @Override
            public void Welcome() {
                System.out.println("Welcome Annon");
            }
        };
        Greeting greeting2 = new Greeting();
        greeting.Welcome();
        greeting2.Welcome();

        MyFrame myFrame = new MyFrame();
    }
}
