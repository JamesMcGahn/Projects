package Gui;

import javax.swing.JOptionPane;

public class GuiBasic {
    public static void main(String[] args) {

        String name = JOptionPane.showInputDialog("Enter your Name:");
        JOptionPane.showMessageDialog(null, "Hell0 " + name);

        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age:"));
        JOptionPane.showMessageDialog(null, "You are " + age + " years old");

        double height = Double.parseDouble(JOptionPane.showInputDialog("Enter your height:"));
        JOptionPane.showMessageDialog(null, "You are " + height + " cm tall");

    }
}
