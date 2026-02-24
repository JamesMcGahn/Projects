package com.example.cruddemo;

import com.example.cruddemo.dao.StudentDAO;
import com.example.cruddemo.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CruddemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(CruddemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {
        return runner -> {
//            createMultipleStudents(studentDAO);
//            readStudent(studentDAO);
//            queryForStudents(studentDAO);
            queryForStudentsByLastName(studentDAO);
        };
    }

    public void queryForStudentsByLastName(StudentDAO studentDAO) {
        List<Student> theStudents = studentDAO.findByLastName("Doe");

        for (Student tempStudent : theStudents) {
            System.out.println(tempStudent);
        }
    }


    private void queryForStudents(StudentDAO studentDAO) {
        List<Student> students = studentDAO.findAll();

        for (Student tempStudent : students) {
            System.out.println(tempStudent);
        }
    }

    private void readStudent(StudentDAO studentDAO) {
        System.out.println("Creating student ...");
        Student student1 = new Student("Andrew", "Doe", "andrew@example.com");
        System.out.println("saving student ...");
        studentDAO.save(student1);

        int studentId = student1.getId();
        System.out.println("student ID: " + studentId);
        System.out.println("finding student ...");
        Student student = studentDAO.findById(studentId);
        System.out.println("found student ..." + student);
    }

    private void createMultipleStudents(StudentDAO studentDAO) {
        System.out.println("Creating student ...");
        Student student1 = new Student("Bob", "Doe", "bob@example.com");
        Student student2 = new Student("Joe", "Doe", "joe@example.com");
        Student student3 = new Student("Sally", "Doe", "sally@example.com");
        System.out.println("saving student ...");
        studentDAO.save(student1);
        studentDAO.save(student2);
        studentDAO.save(student3);
    }

    private void createStudent(StudentDAO studentDAO) {
        System.out.println("Creating student ...");
        Student student = new Student("Paul", "Doe", "abx@example.com");
        System.out.println("saving student ...");
        studentDAO.save(student);
        System.out.println("finding student ..." + student.getId());
    }
}
