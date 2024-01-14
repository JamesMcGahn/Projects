package Basics.TimerTasks;

import java.util.Calendar;
import java.util.Timer;
import java.util.TimerTask;

public class TimerTasks {
    // Timer = a facility for threads to schedule taks for future execution in a
    // background thread
    // TimerTask = a task that can be scheduled for one-time or repeated execution
    // by a timer

    public static void main(String[] args) {
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            int counter = 10;

            @Override
            public void run() {
                if (counter > 0) {
                    System.out.println(counter + " seconds");
                    counter--;
                } else {
                    System.out.println("Happy new year");
                    timer.cancel();
                }
            }
        };

        // timer.schedule(task, 3000);

        // Calendar date = Calendar.getInstance();
        // date.set(Calendar.YEAR, 2024);
        // date.set(Calendar.MONTH, Calendar.JANUARY);
        // date.set(Calendar.DAY_OF_MONTH, 12);
        // date.set(Calendar.HOUR_OF_DAY, 1);
        // date.set(Calendar.MINUTE, 2);
        // timer.schedule(task, date.getTime());

        timer.scheduleAtFixedRate(task, 0, 1000);
    }
}
