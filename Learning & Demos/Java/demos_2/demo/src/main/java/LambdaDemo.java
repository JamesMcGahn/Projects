import java.util.function.Predicate;

public class LambdaDemo {
    public static void main(String[] args) {
        Greetings lambda = (n) -> System.out.println(n);

        lambda.greetings("Hello There");

        StringEndings exclamation = (s) -> s + "!";
        System.out.println(exclamation.perform("hello worlds"));

        String hammy = "hammy";
        String tester = "tester";
        StringCompare comparing = ((s1, s2) -> {
            if (s1.length() > s2.length()) {
                return s1;
            }
            return s2;

        });

        System.out.println(comparing.perform(hammy, tester));

        Predicate<Integer> greaterThan50 = i -> (i > 50);
        Predicate<Integer> lessThan100 = i -> (i < 100);
        System.out.println(lessThan100.test(10));
        System.out.println(lessThan100.negate().test(10));
        System.out.println(lessThan100.or(greaterThan50).test(200));
        System.out.println(lessThan100.and(greaterThan50).test(200));


        Calculate divider = (a, b) -> {
            try {
                return a / b;
            } catch (ArithmeticException e) {
                e.printStackTrace();
                return -1;
            }
        };

        System.out.println(divider.divide(10, 5));
        System.out.println(divider.divide(10, 0));
        System.out.println(divider.divide(5, 10));
    }
}

@FunctionalInterface
interface Greetings {
    void greetings(String greeting);
}

@FunctionalInterface
interface StringEndings {
    String perform(String s);
}

@FunctionalInterface
interface StringCompare {
    String perform(String s1, String s2);
}

@FunctionalInterface
interface Calculate {
    int divide(int a, int b);
}