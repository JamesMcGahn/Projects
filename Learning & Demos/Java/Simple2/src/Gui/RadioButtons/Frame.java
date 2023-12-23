package Gui.RadioButtons;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JRadioButton;
import javax.swing.JFrame;

public class Frame extends JFrame implements ActionListener {
    JButton button = new JButton("Submit");
    JRadioButton radio;
    JRadioButton radio1;
    JRadioButton radio2;

    Frame() {
        radio = new JRadioButton();
        radio1 = new JRadioButton();
        radio2 = new JRadioButton();

        ButtonGroup buttongrp = new ButtonGroup();
        buttongrp.add(radio);
        buttongrp.add(radio1);
        buttongrp.add(radio2);

        this.add(radio);
        this.add(radio1);
        this.add(radio2);

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
            System.out.println(radio.isSelected());
        }
    }
}
