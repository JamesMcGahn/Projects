package Gui.MouseListeners;

import java.awt.Color;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class MouseListenDemo extends JFrame implements MouseListener {
    JLabel label;

    MouseListenDemo() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(500, 500);

        this.setLayout(null);
        label = new JLabel();
        label.setBounds(0, 0, 100, 100);
        label.setBackground(Color.red);
        label.setOpaque(true);
        label.addMouseListener(this);
        this.add(label);
        this.setVisible(true);
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        // invoked when the mouse button has been clicked (pressed and released) on a
        // component
        System.out.println("You clicked the label");
    }

    @Override
    public void mousePressed(MouseEvent e) {
        // invoked when a mouse button has been pressed on a component
        System.out.println("You pressed mouse on the label");
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        // invoked when a mouse button has been released on a component
        System.out.println("You released mouse on the label");
    }

    @Override
    public void mouseEntered(MouseEvent e) {
        // invoked when a mouse enters a component
        System.out.println("You entered the label");
        label.setBackground(Color.blue);
    }

    @Override
    public void mouseExited(MouseEvent e) {
        // invoked when a mouse exits a component
        System.out.println("You exited the label");
        label.setBackground(Color.red);
    }
}
