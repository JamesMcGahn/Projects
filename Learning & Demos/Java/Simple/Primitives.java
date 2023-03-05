public class Primitives {

    int id = 1000; // -2,147,483,648-2,147,483,647
    byte age = 18; // -128- 127
    short cash = 12345; // -32768 - 32767
    long phone = 223_456_789L; // -9223372036854775808 - 9223372036854775807
    // _ readability > v7
    float floaty = 3.32323F; //
    double dubs = 3.32322323232; // more numbers /64 bits more precise than float
    // double is default type for real numbers

    char charrrs = 'D'; // three different ways to store char "D"
    char char2 = '\u0044'; // three different ways to store char "D"
    char myChar = 68; // three different ways to store char "D"

    boolean ageOver21 = true;
    // generally -- stick with int & double unless memory saving is important

    void compute() {

        int nextId = id + 1;

        System.out.println("id: " + id);
        System.out.println("next ID " + nextId);
        System.out.println("age: " + age);
        System.out.println("phone: " + phone);
        System.out.println(Long.MIN_VALUE + "-" + Long.MAX_VALUE);
        System.out.println(charrrs + " " + char2 + " " + myChar);

    }

    public static void main(String[] args) {
        Primitives i = new Primitives();
        i.compute();
    }

}
