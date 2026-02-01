public class MethodOverloadingDemo {

    public static void main(String[] args) {
        displayGreeting(5);
    }

    static void displayGreeting(int count) {
        for (int i = 0; i < count; i++) {
            displayGreeting();
        }
    }

    static void displayGreeting() {
        System.out.println("hello");
        System.out.println("hello");
    }
}
