package Basics.Threads;

public class Main {
    public static void main(String[] args) throws InterruptedException {

        // System.out.println("Active Threads: " + Thread.activeCount());
        // System.out.println("Active Threads Name: " +
        // Thread.currentThread().getName());
        // Thread.currentThread().setPriority(10);
        // System.out.println("Active Threads Priority: " +
        // Thread.currentThread().getPriority());
        // System.out.println("Is Thread Alive: " + Thread.currentThread().isAlive());

        // for (int i = 3; i > 0; i--) {
        // System.out.println(i);
        // Thread.sleep(1000);
        // }
        // System.out.println("you are done");

        // MyThread thread2 = new MyThread();
        // System.out.println("Is daemon thread>? " + thread2.isDaemon());
        // thread2.start();
        // System.out.println("Active Threads: " + Thread.activeCount());
        // thread2.setName("2nd thread");
        // System.out.println("Active Threads Name: " + thread2.getName());
        // thread2.setPriority(5);
        // System.out.println("Active Threads Priority: " + thread2.getPriority());
        // System.out.println("Is Thread Alive: " + thread2.isAlive());

        MyThread thread1 = new MyThread();
        MyRunnable runnable1 = new MyRunnable();
        Thread thread2 = new Thread(runnable1);
        thread1.start();
        thread1.join(1000);
        thread2.start();
        // System.out.print(1 / 0);
    }
}
