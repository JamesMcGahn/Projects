package com.example.demo.common;

import org.springframework.stereotype.Component;

@Component
public class BaseballCoach implements Coach {

    public BaseballCoach() {
        System.out.println("BaseballCoach created " + getClass().getSimpleName());
    }

    @Override
    public String getDailyWorkout() {
        return "Practice bunting for 5 mins";
    }
}
