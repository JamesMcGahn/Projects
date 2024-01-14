package Basics.Threads;

public class MyRunnable implements Runnable {

    @Override
    public void run() {
        System.out.println("This thread is running");
        for (int i = 1; i <= 10; i++) {
            System.out.println("Thread #2 : " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("This thread #2 is finished");
    }

}
