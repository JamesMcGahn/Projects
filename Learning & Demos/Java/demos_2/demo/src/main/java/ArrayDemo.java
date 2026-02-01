public class ArrayDemo {
    public static void main(String[] args) {

        String[] colors = {"red", "blue", "green", "orange", "black"};

        for (int i = 0; i < colors.length; i++) {
            System.out.println(colors[i]);
        }

        for (String color : colors) {
            System.out.println(color);
        }
    }
}
