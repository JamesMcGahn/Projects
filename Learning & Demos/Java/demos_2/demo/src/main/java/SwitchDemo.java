public class SwitchDemo {
    public static void main(String[] args) {
        String computerType = "tablet";

        switch (computerType) {
            case "phone":
                System.out.println("phone");
                break;
            case "tablet":
                System.out.println("tablet");
                break;
            default:
                System.out.println("default case");
        }
    }
}
