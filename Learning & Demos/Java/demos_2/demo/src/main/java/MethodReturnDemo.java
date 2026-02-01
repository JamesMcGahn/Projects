public class MethodReturnDemo {
    public static void main(String[] args) {
        int val = 5;
        int output = summation(val);
        System.out.println("Summation of " + val + " is " + output);
    }

    static int summation(int num) {
        int result = 0;

        for (int i = 0; i <= num; i++) {
            System.out.println(result);
            result += i;
        }
        return result;
    }
}
