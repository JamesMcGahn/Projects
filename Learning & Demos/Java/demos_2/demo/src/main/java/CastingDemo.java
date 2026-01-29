public class CastingDemo {
    public static void main(String[] args) {

        double theDouble = 89.70;
        int theINT = (int) theDouble;
        System.out.println("the double " + theDouble + " the casted int " + theINT);

        float theFloat = 50.70f;
        byte theByte = (byte) theFloat;
        System.out.println("the float " + theFloat + " the casted byte " + theByte);

        int theINT2 = 65;
        char theChar = (char) theINT2;
        System.out.println("the int " + theINT2 + " the casted char " + theChar);

        int count = Integer.parseInt("49");
        System.out.println("Casting string to Int " + count);
    }
}
