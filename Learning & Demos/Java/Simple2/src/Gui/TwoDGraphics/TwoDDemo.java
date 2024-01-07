package Gui.TwoDGraphics;

import javax.swing.JFrame;

public class TwoDDemo extends JFrame {
    MyPanel panel;

    TwoDDemo() {
        panel = new MyPanel();
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        this.setLocationRelativeTo(null);

        this.add(panel);
        this.pack();
        this.setVisible(true);
    }

}
