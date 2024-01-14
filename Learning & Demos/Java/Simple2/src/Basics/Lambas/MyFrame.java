package Basics.Lambas;

import javax.swing.JButton;
import javax.swing.JFrame;

public class MyFrame extends JFrame {
    JButton myButton = new JButton("My Button");
    JButton myButton2 = new JButton("My Button");

    MyFrame() {

        myButton.setBounds(100, 100, 200, 100);
        myButton.addActionListener(
                (e) -> System.out.println("You clicked button 1"));

        this.add(myButton);
        myButton2.setBounds(100, 200, 200, 100);
        myButton2.addActionListener(
                (e) -> System.out.println("You clicked button 2"));

        this.add(myButton2);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(600, 600);
        this.setLayout(null);
        this.setVisible(true);
    }
}
