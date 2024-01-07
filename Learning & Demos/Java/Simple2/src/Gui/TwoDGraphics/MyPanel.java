package Gui.TwoDGraphics;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JPanel;

public class MyPanel extends JPanel {
    Image image;

    MyPanel() {
        image = new ImageIcon("./src/Gui/icon.png").getImage();
        this.setPreferredSize(new Dimension(500, 500));
    }

    public void paint(Graphics g) {
        Graphics2D g2d = (Graphics2D) g;

        g2d.drawImage(image, 0, 0, null);

        g2d.setColor(Color.blue);
        g2d.setStroke(new BasicStroke(5));
        // g2d.drawLine(0, 0, 500, 500);

        g2d.drawRect(5, 25, 100, 200);
        g2d.setColor(Color.red);
        g2d.fillRect(5, 25, 100, 200);

        g2d.drawOval(300, 300, 50, 50);
        g2d.setColor(Color.red);
        g2d.fillArc(200, 200, 150, 150, 0, 180);
        g2d.setColor(Color.white);
        g2d.fillArc(200, 200, 150, 150, 180, 180);

        int[] xPoints = { 150, 250, 350 };
        int[] yPoints = { 300, 150, 300 };
        g2d.setPaint(Color.yellow);
        g2d.drawPolygon(xPoints, yPoints, 3);

        g2d.setFont(new Font("Arial", Font.BOLD, 50));
        g2d.drawString("You are a winner", 50, 50);

    }
}
