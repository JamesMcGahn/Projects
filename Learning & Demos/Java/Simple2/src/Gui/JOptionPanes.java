package Gui;

import javax.swing.JOptionPane;

public class JOptionPanes {
    public static void main(String[] args) {

        // jOptionpane = pop up a standard dialog box that prompts users for a value or
        // informs them of something

        // JOptionPane.showMessageDialog(null, "plain", "Title",
        // JOptionPane.PLAIN_MESSAGE);
        // JOptionPane.showMessageDialog(null, "info", "Title",
        // JOptionPane.INFORMATION_MESSAGE);
        // JOptionPane.showMessageDialog(null, "question", "Title",
        // JOptionPane.QUESTION_MESSAGE);
        // JOptionPane.showMessageDialog(null, "warning", "Title",
        // JOptionPane.WARNING_MESSAGE);
        // JOptionPane.showMessageDialog(null, "error", "Title",
        // JOptionPane.ERROR_MESSAGE);

        // int answer = JOptionPane.showConfirmDialog(null, "keep going?", null,
        // JOptionPane.YES_NO_CANCEL_OPTION);
        // System.out.println(answer);
        String answerInput = JOptionPane.showInputDialog("What is your Name");
        // System.out.println(answerInput);
        String[] responses = { "No you are awesome", "thanks", "haha" };
        JOptionPane.showOptionDialog(null, "You are great " + answerInput, "Hi There", JOptionPane.YES_NO_CANCEL_OPTION,
                JOptionPane.INFORMATION_MESSAGE, null, responses, 0);
    }
}
