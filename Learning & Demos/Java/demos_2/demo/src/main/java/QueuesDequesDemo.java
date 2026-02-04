import java.util.ArrayDeque;
import java.util.Deque;
import java.util.List;

public class QueuesDequesDemo {
    public static void main(String[] args) {
        Deque<String> deck = new ArrayDeque<String>(List.of("A", "K", "Q", "J", "10"));

        deck.add("9");
        deck.addFirst("J");
        System.out.println(deck.getFirst());
        System.out.println(deck.getLast());
        System.out.println(deck.removeFirst());
        System.out.println(deck.peekFirst());
        for (String card : deck) {
            System.out.println(card);
        }
    }
}
