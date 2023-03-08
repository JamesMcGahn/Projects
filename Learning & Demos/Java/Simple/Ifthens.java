public class Ifthens {
    public static void main(String[] args) {

        boolean gameOver = true;
        int score = 50;

        if (gameOver && score > 25) {
            System.out.println("Nice game...Try Again");
        } else if (gameOver && score < 25) {
            System.out.println("You need some practice...Try Again");

        } else {
            System.out.println("you cand do it");
        }

    }
}
