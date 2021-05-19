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
    public String login(@RequestBody Context data) throws NamingException {
//        System.out.println("hello from the server");
//        System.out.println(data);
//        User user =
//        ObjectMapper objectMapper = new ObjectMapper();
//        User user = objectMapper.readValue(data, User.class);
////        String name= "";
////        data.bind(name,User.class);
//        System.out.println(use);
        return "200";
    }

//    @RequestMapping("/login")
//    public String login(@RequestParam String username,@RequestParam String password) {
////        System.out.println("hello from the server");
//        System.out.println(username +"     "+password);
//        return "200";
//    }


}