package com.example.spring.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

record Person(String name, int age, Address address) {
};

record Address(String firstLine, String city) {
};

@Configuration
public class HelloWorldConfiguration {

    @Bean
    public String name() {
        return "Hi world";
    }

    @Bean
    public int age() {
        return 92;
    }

    @Bean
    @Primary
    public Person person() {
        return new Person("Tony", 96, new Address("Pike Street", "New Haven"));

    }

    @Bean
    public Person person2MethodCall() {
        // create person with stored info in bean
        return new Person(name(), age(), address());
    }

    @Bean
    public Person person3params(String name, int age, Address address2) {
        // create person with stored info in bean
        return new Person(name, age, address2);
    }

    @Bean(name = "address2")
    public Address address() {
        return new Address("Home Street", "New York");
    }
}
