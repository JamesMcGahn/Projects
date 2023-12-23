package Gui.CheckBoxes;

import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class Frame extends JFrame implements ActionListener {
    JButton button = new JButton("Submit");
    JCheckBox checkbox;

    Frame() {

        checkbox = new JCheckBox();
        checkbox.setText("Yes");
        checkbox.setFocusable(false);
        this.add(checkbox);
        button.addActionListener(this);
        button.setFocusable(false);
        this.add(button);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // frame.setSize(500, 500);
        this.setLayout(new FlowLayout());
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == button) {
            System.out.println("hi");
            System.out.println(checkbox.isSelected());
        }
    }
}
