package Gui.DragNDrop;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class Frame extends JFrame {
    DragPanel dragPanel = new DragPanel();
    ImageIcon imageIcon = new ImageIcon("./icon2.png");

    Frame() {

        this.add(dragPanel);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(600, 600);

        this.setVisible(true);
    }
}
