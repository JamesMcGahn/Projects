import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FileReaderDemo {
    public static void main(String[] args) throws IOException {
        String fileName = "data/sample-words.txt";

        FileReader fileReader = null;
        try {
            fileReader = new FileReader(fileName);

            // -1 means EOF
            int character = 0;
            while ((character = fileReader.read()) != -1) {
                System.out.println((char) character);
            }
        } catch (FileNotFoundException e) {
            System.out.println(e);
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (fileReader != null) {
                fileReader.close();
            }
        }
    }
}
