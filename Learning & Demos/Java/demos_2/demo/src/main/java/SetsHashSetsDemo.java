import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SetsHashSetsDemo {
    public static void main(String[] args) {
        Set<String> books = new HashSet<String>(List.of("Book 5"));
        books.add("Book");
        books.add("Book 2");
        books.add("Book 3");
        books.add("Book 3");
        System.out.println(books.size());
        for (String book : books) {
            System.out.println(book);
        }

    }
}
