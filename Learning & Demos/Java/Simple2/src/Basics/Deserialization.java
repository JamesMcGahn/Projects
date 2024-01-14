package Basics;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;

import Basics.Serialization.User;

public class Deserialization {
    public static void main(String[] args) {

        try {
            User user = null;
            FileInputStream fileIn = new FileInputStream("./src/Basics/Serialization/UserInfo.ser");

            ObjectInputStream in = new ObjectInputStream(fileIn);

            user = (User) in.readObject();
            in.close();
            fileIn.close();
            System.out.println(user);

            user.sayHello();

        } catch (FileNotFoundException e) {

            e.printStackTrace();
        } catch (IOException e) {

            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
