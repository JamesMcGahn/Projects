import java.util.ArrayList;
import java.util.List;

public class ArrayListDemo {

    public static void main(String[] args) {
        ArrayList<String> todos = new ArrayList<>();
        todos.add("take out trash");
        todos.add("prep dinner");
        todos.add("cook dinner");
        todos.add(0, "walk dog");
        todos.set(0, "pet dog");
        System.out.println(todos.get(0));
        for (String todo : todos) {
            System.out.println(todo);
        }

        List<Integer> nums = new ArrayList<>(List.of(167, 210, 320, 820, 600, 500, 210, 10));
        for (int num : nums) {
            System.out.println(num);
        }
        System.out.println(nums.containsAll(List.of(167, 820)));
        System.out.println(nums.indexOf(210));
        System.out.println(nums.lastIndexOf(210));
        System.out.println(nums.remove(6));
        System.out.println(nums.removeAll(List.of(820, 600)));
        System.out.println(nums.isEmpty());
        for (int num : nums) {
            System.out.println(num);
        }

        List<ArrayListItemDemo> todoList = new ArrayList<ArrayListItemDemo>();
        todoList.add(new ArrayListItemDemo("do hw", 5));
        todoList.add(new ArrayListItemDemo("clean car", 2));

        for (ArrayListItemDemo item : todoList) {
            System.out.println(item.getTitle());
        }
    }
}
