package com.example.demo.common;


public class SwimCoach implements Coach {

    public SwimCoach() {
        System.out.println("SwimCoach created " + getClass().getSimpleName());
    }

    @Override
    public String getDailyWorkout() {
        return "Swim the backstroke for 3 laps";
    }
}
