package Files;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FileReading {
    // Filereader = read contents as a stream of characters
    // read() returns an int value which contains the byte value
    // when read() returns -1, there is no more data to read

    public static void main(String[] args) {

        try {
            FileReader reader = new FileReader("./src/Files/secret_message.txt");
            int data = reader.read();
            while (data != -1) {
                System.out.print((char) data);
                data = reader.read();
            }
            reader.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
