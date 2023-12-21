package Gui;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class BorderLayouts {

    public static void main(String[] args) {

        // Layout manager = defines the natural layout for components within a container

        // 3 common managers

        // BorderLayout = places components in five areas: NORTH, SOUTH, WEST, EAST,
        // CENTER
        // All extra space is placed in the center area

        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        frame.setLayout(new BorderLayout(10, 10));
        frame.setVisible(true);
        JPanel panel1 = new JPanel();
        JPanel panel2 = new JPanel();
        JPanel panel3 = new JPanel();
        JPanel panel4 = new JPanel();
        JPanel panel5 = new JPanel();

        panel1.setBackground(Color.red);
        panel2.setBackground(Color.blue);
        panel3.setBackground(Color.green);
        panel4.setBackground(Color.yellow);
        panel5.setBackground(Color.orange);

        panel1.setPreferredSize(new Dimension(100, 100));
        panel2.setPreferredSize(new Dimension(100, 100));
        panel3.setPreferredSize(new Dimension(100, 100));
        panel4.setPreferredSize(new Dimension(100, 100));
        panel5.setPreferredSize(new Dimension(100, 100));

        // sub panels

        panel5.setLayout(new BorderLayout());

        JPanel panel10 = new JPanel();
        JPanel panel20 = new JPanel();
        JPanel panel30 = new JPanel();
        JPanel panel40 = new JPanel();
        JPanel panel50 = new JPanel();

        panel10.setBackground(Color.red);
        panel20.setBackground(Color.blue);
        panel30.setBackground(Color.green);
        panel40.setBackground(Color.yellow);
        panel50.setBackground(Color.orange);

        panel10.setPreferredSize(new Dimension(50, 50));
        panel20.setPreferredSize(new Dimension(50, 50));
        panel30.setPreferredSize(new Dimension(50, 50));
        panel40.setPreferredSize(new Dimension(50, 50));
        panel50.setPreferredSize(new Dimension(50, 50));

        panel5.add(panel10, BorderLayout.NORTH);
        panel5.add(panel20, BorderLayout.SOUTH);
        panel5.add(panel30, BorderLayout.EAST);
        panel5.add(panel40, BorderLayout.WEST);
        panel5.add(panel50, BorderLayout.CENTER);

        frame.add(panel1, BorderLayout.NORTH);
        frame.add(panel2, BorderLayout.SOUTH);
        frame.add(panel3, BorderLayout.EAST);
        frame.add(panel4, BorderLayout.WEST);
        frame.add(panel5, BorderLayout.CENTER);

    }

}
