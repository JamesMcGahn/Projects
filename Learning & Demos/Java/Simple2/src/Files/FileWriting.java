package Files;

import java.io.FileWriter;
import java.io.IOException;

public class FileWriting {

    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("./src/Files/secret_message.txt");
            writer.write("secret message \nnew line");
            writer.append("\nmessage completed");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
