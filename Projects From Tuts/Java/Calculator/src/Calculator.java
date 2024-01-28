import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.Arrays;

public class Calculator implements ActionListener {
    JFrame frame;
    JTextField textfield;
    JButton[] numberButtons = new JButton[10];
    JButton[] functionButtons = new JButton[16];
    JButton addButton, subButton, mulButton, divButton;
    JButton decButton, equButton, delButton, clrButton, negButton;
    JButton percentButton, expontButton, squareRButton, piButton;
    JButton eButton;
    JPanel panel;
    String[] symbols = { "x", "+", "/", "-", "-", "%", "^" };

    Font myFont = new Font("Arial", Font.BOLD, 20);
    double num1 = 0, num2 = 0, result = 0;
    char operator = ' ';

    Calculator() {
        frame = new JFrame("Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 550);
        frame.setLayout(null);

        textfield = new JTextField();
        textfield.setBounds(50, 25, 500, 75);
        textfield.setFont(new Font("Arial", Font.BOLD, 35));
        textfield.setEditable(false);
        textfield.setHorizontalAlignment(SwingConstants.RIGHT);

        addButton = new JButton("+");
        subButton = new JButton("-");
        divButton = new JButton("/");
        mulButton = new JButton("*");
        decButton = new JButton(".");
        equButton = new JButton("=");
        delButton = new JButton("Delete");
        clrButton = new JButton("Clear");
        negButton = new JButton("(-)");
        percentButton = new JButton("%");
        expontButton = new JButton("^");
        eButton = new JButton("E");
        squareRButton = new JButton("√");
        piButton = new JButton("π");

        functionButtons[0] = addButton;
        functionButtons[1] = subButton;
        functionButtons[2] = mulButton;
        functionButtons[3] = divButton;
        functionButtons[4] = decButton;
        functionButtons[5] = equButton;
        functionButtons[6] = delButton;
        functionButtons[7] = clrButton;
        functionButtons[8] = negButton;
        functionButtons[9] = percentButton;
        functionButtons[10] = expontButton;
        functionButtons[11] = squareRButton;
        functionButtons[12] = piButton;
        functionButtons[13] = negButton;
        functionButtons[14] = delButton;
        functionButtons[15] = clrButton;

        for (int i = 0; i < functionButtons.length; i++) {
            functionButtons[i].addActionListener(this);
            functionButtons[i].setFont(myFont);
            functionButtons[i].setFocusable(false);
        }

        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            numberButtons[i].addActionListener(this);
            numberButtons[i].setFont(myFont);
            numberButtons[i].setFocusable(false);
        }

        panel = new JPanel();
        panel.setBounds(50, 100, 500, 350);
        panel.setLayout(new GridLayout(5, 6, 10, 10));
        panel.setBackground(Color.gray);

        panel.add(piButton);
        panel.add(new JButton());
        panel.add(negButton);
        panel.add(percentButton);
        panel.add(delButton);
        panel.add(clrButton);

        panel.add(new JButton());
        panel.add(new JButton());
        panel.add(numberButtons[7]);
        panel.add(numberButtons[8]);
        panel.add(numberButtons[9]);
        panel.add(divButton);

        panel.add(new JButton());
        panel.add(new JButton());
        panel.add(numberButtons[4]);
        panel.add(numberButtons[5]);
        panel.add(numberButtons[6]);
        panel.add(mulButton);

        panel.add(new JButton());
        panel.add(squareRButton);
        panel.add(numberButtons[1]);
        panel.add(numberButtons[2]);
        panel.add(numberButtons[3]);
        panel.add(subButton);

        panel.add(new JButton());
        panel.add(panel.add(expontButton));
        panel.add(numberButtons[0]);
        panel.add(decButton);
        panel.add(equButton);
        panel.add(addButton);

        frame.add(panel);

        frame.add(textfield);
        frame.setVisible(true);
    }

    public void clear() {
        num1 = 0;
        num2 = 0;
        result = 0;
        textfield.setText("CLEAR");
        new Timer(1000, (ae) -> {
            textfield.setText("");
            ((Timer) ae.getSource()).stop();
        }).start();
    }

    public Double getTextFieldValue() {
        try {
            return Double.parseDouble(textfield.getText());
        } catch (NumberFormatException error) {
            return 0.0;
        }

    }

    @Override
    public void actionPerformed(ActionEvent e) {

        String[] nums = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };
        if (Arrays.stream(nums).anyMatch(e.getActionCommand()::contains)) {
            if ((textfield.getText().length() == 1
                    && Arrays.stream(symbols).anyMatch(textfield.getText()::contains))) {

                if (textfield.getText().contains("-")) {
                    textfield.setText("-" + e.getActionCommand());
                } else {
                    textfield.setText(
                            textfield.getText().substring(1, textfield.getText().length())
                                    .concat(e.getActionCommand()));
                }

            } else {
                textfield.setText(textfield.getText().concat(e.getActionCommand()));
            }

        }

        if (e.getSource() == decButton) {

            if (!textfield.getText().contains(".")) {
                textfield.setText(textfield.getText().concat("."));
            }
        }
        if (e.getSource() == addButton) {
            num1 = getTextFieldValue();
            operator = '+';
            textfield.setText("+");
        }
        if (e.getSource() == subButton) {
            num1 = getTextFieldValue();
            operator = '-';
            textfield.setText("-");
        }
        if (e.getSource() == mulButton) {
            num1 = getTextFieldValue();
            operator = '*';
            textfield.setText("x");
        }
        if (e.getSource() == divButton) {
            num1 = getTextFieldValue();
            operator = '/';
            textfield.setText("/");
        }

        if (e.getSource() == expontButton) {
            num1 = getTextFieldValue();
            operator = '^';
            textfield.setText("^");
        }

        if (e.getSource() == piButton) {
            if (operator == ' ') {
                num1 = Math.PI;
                textfield.setText(String.valueOf(num1));
            } else {
                num2 = Math.PI;
                textfield.setText(String.valueOf(num2));
            }
        }

        if (e.getSource() == percentButton) {
            if (operator == ' ') {
                num1 = getTextFieldValue() * 0.01;
                textfield.setText(String.valueOf(num1));
            } else {
                num2 = getTextFieldValue() * 0.01;
                textfield.setText(String.valueOf(num2));
            }
        }

        if (e.getSource() == squareRButton) {
            if (operator == ' ') {
                num1 = Math.sqrt(getTextFieldValue());
                textfield.setText(String.valueOf(num1));
            } else {
                num2 = Math.sqrt(getTextFieldValue());
                textfield.setText(String.valueOf(num2));
            }
        }

        if (e.getSource() == equButton) {
            num2 = getTextFieldValue();

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 == 0) {
                        textfield.setText("Error: Division By 0");
                        num1 = 0;
                        num2 = 0;
                        result = 0;
                        new Timer(1000, (ae) -> {
                            clear();
                            ((Timer) ae.getSource()).stop();
                        }).start();
                        return;
                    } else {
                        result = num1 / num2;
                    }
                case '^':
                    result = Math.pow(num1, num2);
                    break;
            }
            textfield.setText(String.valueOf(result));
            num1 = result;
            num2 = 0.0;
            operator = ' ';
        }
        if (e.getSource() == clrButton) {
            clear();
        }
        if (e.getSource() == delButton) {
            String string = textfield.getText();

            if (string.length() > 0) {
                textfield.setText(string.substring(0, string.length() - 1));

            }
        }
        if (e.getSource() == negButton) {
            if (textfield.getText().length() == 0 || textfield.getText().charAt(0) == '-') {
                textfield.setText("-");
            } else {
                double temp = getTextFieldValue();
                temp *= -1;
                textfield.setText(String.valueOf(temp));
            }

        }
    }
}
