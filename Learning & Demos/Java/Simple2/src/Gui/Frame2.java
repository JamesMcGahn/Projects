package Gui;

import java.awt.Color;
import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class Frame2 extends JFrame {
    Frame2() {

        this.setTitle("Title of the");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(false);
        this.setSize(420, 420);
        this.setVisible(true);

        ImageIcon image = new ImageIcon("./src/Gui/icon.png");
        this.setIconImage(image.getImage());
        this.getContentPane().setBackground(new Color(100, 100, 255)); // Color.green
    }
}
