public class ForLoops {
    public static void main(String[] args) {

        for (double rate = 2.0; rate <= 5.0; rate++) {
            double interestAmount = calcInterest(10000.0, rate);
            if (interestAmount > 400) {
                System.out.println("breaking");
                break;
            }
            System.out.println("10,000 at " + rate + "% interest = " + interestAmount);
        }

    }

    public static double calcInterest(double amount, double interestRate) {

        return (amount * (interestRate / 100));
    }
}
