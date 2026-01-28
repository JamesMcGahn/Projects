public class NumberDemo {
    public static void main(String[] args) {

        double exam1 = 87.5;
        double exam2 = 100.0;
        double exam3 = 66.50;

        double gradeAverage = (exam1 + exam2 + exam3) / 3;

        System.out.println("exam1 " + exam1);
        System.out.println("exam2 " + exam2);
        System.out.println("exam2 " + exam3);
        System.out.println("grade avg " + gradeAverage);
        System.out.println("grade avg " + String.format("%.2f", gradeAverage));
    }
}
