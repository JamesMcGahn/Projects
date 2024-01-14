package Basics.Threads;

public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("This thread is running");
        for (int i = 10; i > 0; i--) {
            System.out.println("Thread #1 : " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("This thread #1 is finished");
    }
}
