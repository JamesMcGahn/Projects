package com.example.demo.rest;


import com.example.demo.common.Coach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    // Constructor injection
//    // define a private field for the dependency
//    private Coach myCoach;
//
//    //define constructor for dependency injection
//    @Autowired
//    public DemoController(Coach theCoach) {
//        myCoach = theCoach;
//    }


//    //    setter injection
//    private Coach myCoach;
//
//    @Autowired
//    public void setCoach(Coach theCoach) {
//        myCoach = theCoach;
//    }

    // field injection - no longer best practice
    @Autowired
    private Coach myCoach;

    @GetMapping("/dailyworkout")
    public String getDailyWorkout() {
        return myCoach.getDailyWorkout();
    }
}
