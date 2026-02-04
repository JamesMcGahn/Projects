import java.util.LinkedList;
import java.util.List;

public class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList<Integer> linked = new LinkedList<Integer>(List.of(10, 22, 32));
        linked.add(80);
        linked.add(14);
        linked.add(10);

        linked.set(2, 3000);
        linked.push(90);
        linked.addLast(90);
//        contains List methods for example contains, contains all

        System.out.println(linked.indexOf(90));
        System.out.println(linked.remove(10));
        for (int i : linked) {
            System.out.println(i);
        }
    }
}
