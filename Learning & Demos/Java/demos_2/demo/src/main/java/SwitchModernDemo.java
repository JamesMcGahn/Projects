public class SwitchModernDemo {
    public static void main(String[] args) {
        String computerType = "tablet";

        switch (computerType) {
            case "phone" -> System.out.println("phone");
            case "tablet" -> System.out.println("tablet");
            default -> System.out.println("default case");
        }
        

        String describe = switch (computerType) {
            case "phone" -> "phone";
            case "tablet" -> "tablet";
            default -> "default case";
        };
        System.out.println(describe);
    }
}
