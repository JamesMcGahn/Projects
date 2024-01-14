package Basics.Serialization;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class Serialization {

    // Serialization = process of converting an object into a byte stream. Persists
    // the object after program exits.
    // the byte stream can be saved as a file or sent over a network.
    // byte streams can be saved as a file (.ser) which is platform independent

    public static void main(String[] args) {
        User user = new User();
        user.name = "Tony";
        user.password = "password";
        user.notSaved = "i dont matter because i wont be saved";

        try {
            FileOutputStream fileOut = new FileOutputStream("./src/Basics/Serialization/UserInfo.ser");
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(user);
            out.close();
            fileOut.close();
            System.out.println("object saved");
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }
}
