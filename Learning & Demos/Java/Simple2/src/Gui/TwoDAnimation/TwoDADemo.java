package Gui.TwoDAnimation;

import javax.swing.JFrame;

public class TwoDADemo extends JFrame {
    Panel panel;

    TwoDADemo() {
        panel = new Panel();

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.add(panel);
        this.pack();
        this.setLocationRelativeTo(null);
        this.setVisible(true);
    }
}
