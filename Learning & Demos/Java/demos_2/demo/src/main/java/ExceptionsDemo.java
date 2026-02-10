public class ExceptionsDemo {
    public static void main(String[] args) {
        String numberString = "luv2code";


        try {
            int numberInt = Integer.parseInt(numberString);
            System.out.println(numberInt);

        } catch (NullPointerException | NumberFormatException e) {
            System.out.println("You cant parse a str thats not an int");
        } catch (Exception e) {
            System.out.println("error");
        } finally {
            System.out.println("printing finally");
        }


    }
}
