package com.example.demo.common;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
public class CricketCoach implements Coach {
    public CricketCoach() {
        System.out.println("CricketCoach created " + getClass().getSimpleName());
    }

    // define our init method
    @PostConstruct
    public void startupstuff() {
        System.out.println("CricketCoach startedup" + getClass().getSimpleName());
    }

    // define our destroy method
    @PreDestroy
    public void docleanupstuff() {
        System.out.println("CricketCoach before deletion" + getClass().getSimpleName());
    }


    @Override
    public String getDailyWorkout() {
        return "Practice fast bowling for 15 mins!!!!";
    }
}
