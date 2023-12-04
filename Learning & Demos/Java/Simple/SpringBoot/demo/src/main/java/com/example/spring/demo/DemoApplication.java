package com.example.spring.demo;

import org.springframework.beans.BeansException;
// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

// @SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {

		try (var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class)) {
			System.out.println(context.getBean("name"));
			System.out.println(context.getBean("age"));
			System.out.println(context.getBean("person"));
			System.out.println(context.getBean("person2MethodCall"));
			System.out.println(context.getBean("person3params"));
		} catch (BeansException e) {

			e.printStackTrace();
		}

		// SpringApplication.run(DemoApplication.class, args);

	}

}
