package com.springboot.demo.testapp.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {

    // inject properties:
    @Value("${coach.name}")
    private String coachName;

    @Value("${team.name}")
    private String teamName;

    //
    @GetMapping("/teaminfo")
    public String getTeamInfo(){
        return  "Coach: " + coachName + ", Team name: " + teamName;
    }



    // expose "/" endpoint that's returns a hello world

    @GetMapping("/")
    public String sayHello(){
        return "Hello World";
    }

    @GetMapping("/workout")
    public String getDailyWorkout(){
        return "Run a hard 5k!";
    }

    @GetMapping("/fortune")
    public String getFortune(){
        return "You will have a great day!";
    }
}
