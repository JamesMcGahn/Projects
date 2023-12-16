package Gui;

import javax.swing.JLabel;
import javax.swing.border.Border;
import javax.swing.JFrame;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import java.awt.Color;
import java.awt.Font;

public class Labels {
    public static void main(String[] args) {
        ImageIcon image = new ImageIcon("./src/Gui/icon.png");
        Border border = BorderFactory.createLineBorder(Color.green, 3);

        JLabel label = new JLabel();
        label.setText("Setting text here sdfasd");
        label.setHorizontalTextPosition(JLabel.CENTER);
        label.setVerticalTextPosition(JLabel.TOP);
        label.setIconTextGap(25);
        label.setForeground(new Color(200, 200, 255));
        label.setFont(new Font("Arial", Font.BOLD, 50));
        label.setBackground(Color.black);
        label.setOpaque(true); // display background
        label.setIcon(image);
        label.setBorder(border);

        label.setVerticalAlignment(JLabel.TOP);
        label.setHorizontalAlignment(JLabel.CENTER);
        // label.setBounds(0, 0, 250, 250);

        JFrame frame = new JFrame();
        frame.setTitle("Title of the Frame");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // frame.setSize(500, 500);
        frame.setVisible(true);
        // frame.setLayout(null);

        frame.add(label);
        frame.pack();
    }
}
