import java.io.FileNotFoundException;
import java.io.FileReader;

public class ExceptionsDemo2 {
    public static void main(String[] args) {

        try {
            FileReader fileReader = new FileReader("file.text");
            fileReader2();
        } catch (FileNotFoundException e) {
            System.out.println("file not found");
        } catch (Exception e) {
            System.out.println("error");
        }
    }

    public static void fileReader2() throws FileNotFoundException {

        FileReader fileReader = new FileReader("file.text");
    }
}