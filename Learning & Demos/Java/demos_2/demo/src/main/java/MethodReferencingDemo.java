import java.util.function.Function;

public class MethodReferencingDemo {
    public static void main(String[] args) {
        Function<String, Integer> countVows = MethodReferencingDemo::countVowels;
        System.out.println(countVows.apply("umbrella"));
    }

    public static int countVowels(String s) {
        int count = 0;
        String vowels = "AEIOUaeiou";
        for (char c : s.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
}
