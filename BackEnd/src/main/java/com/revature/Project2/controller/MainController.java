package com.revature.Project2.controller;//package com.example.springboot;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.Project2.pojo.User;
import org.springframework.web.bind.annotation.*;

import javax.naming.Context;
import javax.naming.NamingException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/login")
    public String login(@RequestBody User user) throws NamingException {
        //validate user here

        //call service for logging in user
        System.out.println(user);
        return "200";
    }


}