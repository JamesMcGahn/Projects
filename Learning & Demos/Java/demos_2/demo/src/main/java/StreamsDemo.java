import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsDemo {

    public static void main(String[] args) {
        List<String> names = Arrays.asList("Eric", "Sandy", "Taco", "Buck", "Chico");

        List<String> result = names.stream()
                .filter(s -> s.length() <= 6)
                .map(String::toUpperCase)
                .sorted()
                .collect(Collectors.toList());
        result.forEach(System.out::println);
    }
}


