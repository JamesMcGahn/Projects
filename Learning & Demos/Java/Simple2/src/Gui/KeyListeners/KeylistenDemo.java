package Gui.KeyListeners;

import java.awt.Color;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class KeylistenDemo extends JFrame implements KeyListener {
    JLabel label;

    KeylistenDemo() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(500, 500);
        this.addKeyListener(this);
        this.setLayout(null);

        label = new JLabel();
        label.setBounds(0, 0, 100, 100);
        label.setBackground(Color.red);
        label.setOpaque(true);

        this.add(label);
        this.setVisible(true);

    }

    @Override
    public void keyTyped(KeyEvent e) {
        // Keytyped = invoked when a key is typed - uses KeyChar, charoutput
        switch (e.getKeyChar()) {
            case 'a':
                label.setLocation(label.getX() - 1, label.getY());
                break;
            case 'd':
                label.setLocation(label.getX() + 1, label.getY());
                break;
            case 'w':
                label.setLocation(label.getX(), label.getY() - 1);
                break;
            case 's':
                label.setLocation(label.getX(), label.getY() + 1);
                break;

        }
    }

    @Override
    public void keyPressed(KeyEvent e) {
        // Keypressed = invoked when a physical key is pressed down. uses keycode, int
        // output

        switch (e.getKeyCode()) {
            case 37:
                label.setLocation(label.getX() - 10, label.getY());
                break;
            case 39:
                label.setLocation(label.getX() + 10, label.getY());
                break;
            case 38:
                label.setLocation(label.getX(), label.getY() - 10);
                break;
            case 40:
                label.setLocation(label.getX(), label.getY() + 10);
                break;
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {
        // KeyReleased = invoked when a physical key is released
        // System.out.println("released key char" + e.getKeyChar());
        // System.out.println("released key code" + e.getKeyCode());
    }

}
