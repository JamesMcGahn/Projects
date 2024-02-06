import java.awt.Font;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class WelcomePage {
    JFrame frame = new JFrame();
    JLabel welcomJLabel = new JLabel("Hello");

    WelcomePage(String userId) {
        welcomJLabel.setBounds(0, 0, 200, 35);
        welcomJLabel.setFont(new Font(null, Font.BOLD, 25));
        welcomJLabel.setText("hello " + userId);
        frame.add(welcomJLabel);

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(450, 450);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}
