public class MethodOverloading {

    public static void main(String[] args) {
        calculateScore("bob", 30);
        calculateScore(50);
    }

    public static int calculateScore(String playerName, int score) {
        System.out.println("score for " + playerName + ": " + score);
        return score * 100;
    }

    public static int calculateScore(int score) {
        return calculateScore("Anonymous", score);
    }
    // a way to get around java not having default params

    public static void calculateScore() {
        System.out.println("score for unnamed player" + ": " + "no score");

    }
    // changing return type doesnt change the signature.
}
