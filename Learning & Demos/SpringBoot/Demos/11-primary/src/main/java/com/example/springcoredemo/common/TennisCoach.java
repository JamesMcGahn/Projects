package com.example.springcoredemo.common;


import org.springframework.stereotype.Component;

@Component
public class TennisCoach implements Coach {


    @Override
    public String getDailyWorkout() {
        return "Practice serving for 15 minutes!";
    }
}
