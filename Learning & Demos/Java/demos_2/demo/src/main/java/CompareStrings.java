public class CompareStrings {
    public static void main(String[] args) {

        String s1 = "Hello";
        String s2 = "Hello";
        boolean result = s1 == s2;
//      True - compared memory
        System.out.println("s1 " + s1 + " " + "s2 " + s2);
        System.out.println("equal" + result);


        String s3 = new String("Hello");
        boolean result2 = s1 == s3;
//        FALSE - compared memory
        System.out.println("s1 " + s1 + " " + "s3 " + s3);
        System.out.println("equal" + result2);

//        Correct - compared text
        boolean result3 = s1.equals(s3);
        boolean result4 = s1.equalsIgnoreCase(s3);

        System.out.println("s1 " + s1 + " " + "s3 " + s3);
        System.out.println("equal" + result3);
        System.out.println("compare ignoring case " + result4);
    }
}
