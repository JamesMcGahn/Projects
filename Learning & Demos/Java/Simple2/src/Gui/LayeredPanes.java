package Gui;

import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JLayeredPane;

public class LayeredPanes {
    public static void main(String[] args) {
        // JLayeredPane = Swing container that provides a third dimension for
        // positioning components ex: depth, z-index
        JLabel label1 = new JLabel();
        label1.setOpaque(true);
        label1.setBackground(Color.RED);
        label1.setBounds(50, 50, 200, 200);
        JLabel label2 = new JLabel();
        label2.setOpaque(true);
        label2.setBackground(Color.BLUE);
        label2.setBounds(100, 100, 200, 200);
        JLabel label3 = new JLabel();
        label3.setOpaque(true);
        label3.setBackground(Color.GRAY);
        label3.setBounds(150, 150, 200, 200);
        JLabel label4 = new JLabel();
        label4.setOpaque(true);
        label4.setBackground(Color.GREEN);
        label4.setBounds(200, 200, 200, 200);

        JLayeredPane layeredPane = new JLayeredPane();
        layeredPane.setBounds(0, 0, 500, 500);
        layeredPane.add(label1, JLayeredPane.DRAG_LAYER);
        layeredPane.add(label2, Integer.valueOf(2));
        layeredPane.add(label3);
        layeredPane.add(label4, JLayeredPane.MODAL_LAYER);

        JFrame frame = new JFrame("JLayeredPanel");
        frame.add(layeredPane);

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(new Dimension(500, 500));

        frame.setLayout(null);
        frame.setVisible(true);
    }
}
