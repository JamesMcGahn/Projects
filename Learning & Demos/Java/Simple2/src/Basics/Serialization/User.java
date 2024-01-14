package Basics.Serialization;

import java.io.Serializable;

public class User implements Serializable {
    String name;
    String password;

    transient String notSaved;

    public void sayHello() {
        System.out.println("hello " + name + "Your password is " + password);
        System.out.println("I should be null: " + notSaved);

    }
}
