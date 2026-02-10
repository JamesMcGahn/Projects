import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriterDemo {
    public static void main(String[] args) {
        try (BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("data/test.txt"))) {
            bufferedWriter.write("Hello");
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
