public class Array2DDemo {
    public static void main(String[] args) {

        int multiTable = 10;
        int[][] table = new int[multiTable][multiTable];

        for (int i = 0; i < multiTable; i++) {
            for (int j = 0; j < multiTable; j++) {
                table[i][j] = (j + 1) * (i + 1);
            }
        }

        for (int[] row : table) {
            for (int cell : row) {
                System.out.print(cell + "\t");
            }
            System.out.println();
        }
    }
}
