package Basics;

import java.util.Random;

public class RandomVals {
    public static void main(String[] args) {
        Random random = new Random();

        int x = random.nextInt(6) + 1;
        boolean z = random.nextBoolean();
        System.out.println(x);
        System.out.println(z);
    }
}
