package com.springboot.demo.testapp.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {

    // expose "/" endpoint that's returns a hello world

    @GetMapping("/")
    public String sayHello(){
        return "Hello World";
    }
}
