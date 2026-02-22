package com.example.demo.common;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
public class TennisCoach implements Coach {
    public TennisCoach() {
        System.out.println("TennisCoach coach created " + getClass().getSimpleName());
    }

    @Override
    public String getDailyWorkout() {
        return "Practice Your Backhand";
    }
}
