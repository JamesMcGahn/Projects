package Gui.OpenNewWindow;

import java.awt.Font;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class NewWindow {
    JFrame frame = new JFrame();
    JLabel label = new JLabel("Hi Horsey");

    NewWindow() {
        label.setBounds(0, 0, 100, 50);
        label.setFont(new Font("Arial", Font.BOLD, 15));
        frame.add(label);

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}
