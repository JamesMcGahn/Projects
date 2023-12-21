package Gui.TextFields;

import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class Frame extends JFrame implements ActionListener {
    JButton button = new JButton("Submit");
    JTextField textField = new JTextField();

    Frame() {

        button.setBounds(100, 160, 200, 40);
        button.setFocusable(false);
        button.addActionListener(this);

        textField.setPreferredSize(new Dimension(250, 40));
        this.add(textField);

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
            this.dispose();
            System.out.println(textField.getText());
        }
    }
}
