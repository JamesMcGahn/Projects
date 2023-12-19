package Gui;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class Frame3 extends JFrame implements ActionListener {
    JButton button;
    JLabel label;

    Frame3() {
        button = new JButton();
        button.setBounds(200, 100, 100, 100);
        button.addActionListener(e -> System.out.println("hi"));
        button.addActionListener(this);
        button.setText("Click me");
        button.setFocusable(false);

        label = new JLabel();
        label.setBounds(150, 150, 100, 100);
        label.setVisible(false);
        label.setText("Hi Mom");

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);
        this.setSize(500, 500);
        this.setVisible(true);
        this.add(button);
        this.add(label);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == button) {
            System.out.println("poop");
            label.setVisible(true);
        }
    }
}
