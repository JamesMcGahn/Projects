package Files;

import java.io.File;

public class FileClass {
    public static void main(String[] args) {
        File file = new File("./src/Files/secret_message.txt");
        if (file.exists()) {
            System.out.println("That file exists");
            System.out.println(file.getAbsolutePath());
            System.out.println(file.getPath());
            System.out.println(file.isFile());
            file.delete();
        } else {
            System.out.println("that file is not found");
        }
    }

}
