package com.example.demo.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
public class TrackCoach implements Coach {
    public TrackCoach() {
        System.out.println("TrackCoach coach created " + getClass().getSimpleName());
    }

    @Override
    public String getDailyWorkout() {
        return "Practice high knees for 10 mins";
    }
}
